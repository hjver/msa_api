//express API 서버로 접근한느 방식 
async function majax(){
	console.log("서버에 접근 함수!!");
	try{
		//express API 통신을 이용
		var api = await fetch("http://34.47.116.144:9800/api/data");
		var result = await api.json(); //return 결과값을 받는 
		console.log(result);
		//innerHTML 배열로 HTML id속성을 이용하여 웹 페이지
	}catch(error){
		console.log(error);
	}
}