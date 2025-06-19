class Web extends React.Component{
	pd = alldata;  //Backend가 보내준 json 배열값을 React 가상변수로 이관
	htmls = []; //반복문을 작동시킨 html 코드를 담는 배열
	render(){
		return(
			<>
			<div>
			<ol>
			{this.aaa()}
			</ol>
			</div>
			</>
		)
	}
	//익명함수 생성 반복문으로 데이터를 생성
	aaa = function(){
		/*
		CDN에서 html배열에 push를 사용하여 적용하는 것이 아니라 함수에서 foreach, map을 이용하여
		즉각 핸들링 이벤트를 적용해야만 핸들링을 할 수 있음
		*/
		return this.pd.map((a, b) => (
			<li key={b} onClick={()=>this.getdata(a)}>{a}</li>
		));
	}
	
	getdata = (pnm) => {
		location.href='./product_list.do?pnm='+pnm;
	}
}

ReactDOM.render(<Web/>,document.querySelector("#box"));