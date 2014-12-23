<?php
session_start();
class Platform {
	
	protected $loggedUserObject = false;
	protected $iUserId = 0;
	

	static function init() {
		
	}
	
	public function __construct (){
		if(isset($_SESSION['user'])){
			$aUser = json_decode($_SESSION['user']);
			$this->loggedUserObject = true;
			if(isset($aUser->Customer->id))
				$this->iUserId = $aUser->Customer->id;
		}
		
	} 
	
	function getAssetsInfo (){
		$apiData = array('api_username' => 'Chen 20 NIS', 
						 'api_password' => '548dab9366063', 
						 'MODULE' => 'Assets', 
						 'COMMAND' => 'view', 
						 'FILTER[isTradeable]', '1',
						 'FILTER[type]','currencies,commodities'); //,indices,stocks
						 
						 
		Platform::executeCurl($apiData);
	}
	
	static function executeCurl ($aArray){
		$URL = 'http://www.api.beeoptions.com/Api';
		$ch = curl_init($URL);
		curl_setopt($ch, CURLOPT_POST, true);
		curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($aArray));
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		$result = curl_exec($ch);
		// run the whole process
		$aXML = new SimpleXMLElement($result);
		
		
		if($aXML->connection_status == "successful"){
			echo json_encode($aXML);
			return json_encode($aXML);
		} else {
			echo 'error';
			return false;
		}
		curl_close($ch);
	}
	
	function verifyUserIsLogged (){
		if($this->loggedUserObject != null)
			return true;
		else 
			return false;
	}

	function login($user, $pass) {
		if(!$this->verifyUserIsLogged()){
			$apiData = array('api_username' => 'Chen 20 NIS', 
						 'api_password' => '548dab9366063', 
						 'MODULE' => 'Customer', 
						 'COMMAND' => 'validate', 
						 'FILTER[email]'=> $user,
						 'FILTER[password]'=>$pass);
						 
			return Platform::executeCurl($apiData);
		}
	}
			
	

	function getStatisticsPerUser() {
		if(!$this->verifyUserIsLogged())
			return false;
		// open positions | won | lost
		$apiData = array('api_username' => 'Chen 20 NIS', 
						 'api_password' => '548dab9366063', 
						 'MODULE' => 'Positions', 
						 'COMMAND' => 'view', 
						 'FILTER[customerId]' => $this->iUserId, 
						 'LFILTER[options][product]'=> 'regular');
						 
		return Platform::executeCurl($apiData);
						 
	}

	function getRunningPositions() {
		if(!$this->verifyUserIsLogged())
			return false;
		
		
	}

	function getClosedPostion() {
		if(!$this->verifyUserIsLogged())
			return false;
	}

	function createPosition() {
		if(!$this->verifyUserIsLogged())
			return false;
	}
	
	function getEndDates(){
		date_default_timezone_set("UTC");
		$sTempUnix = strtotime(date('Y-m-d 17:00', time()));
		echo json_encode(array('0'=>$sTempUnix, 
							   '1'=>($sTempUnix + 86400),
							   '2'=>($sTempUnix + (86400*2))
						));
	}

	

}

//$_SESSION = array();
if(key_exists('action', $_GET)){
	$oPlatform = new Platform;
	
	if($_GET['action'] == 'getAssets'){
		$oPlatform->getAssetsInfo();
	}	
	
	if($_GET['action'] == 'login'){
		
		if(!key_exists('username', $_POST) || !key_exists('password', $_POST) )
			die;
		
		if(isset($_SESSION['user']) && strlen($_SESSION['user']) > 0){
			echo $_SESSION['user'];die;
		}
		
		$oObject = $oPlatform->login($_POST['username'], $_POST['password']);
		$_SESSION['user'] = $oObject;
	}

	if($_GET['action'] == 'logout'){
		UNSET($_SESSION['user']);
	}	
	
	if($_GET['action'] == 'getStatisticsPerUser'){
		$oPlatform->getStatisticsPerUser();
	}
	
	if($_GET['action'] == 'getEndDate') {
		$oPlatform->getEndDates();
	}
}
	

?>