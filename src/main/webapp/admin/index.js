/*
React CLI : ECMAScript (es5~6) => Redux => (es7)
React CDN : ECMAScript (es5~6)
React.Component : React 라이브러리를 활용하여 화면에 출력하는 코드
 */
class Test extends React.Component{
	
	render(){
		return(
			<>
			<ul>
			<li>연습1</li>
			<li>연습2</li>
			</ul>
			</>
		);
	}
}

class Html extends React.Component{
	render(){
		return(
			<>
			검색 : <input type="text" id="search" name="search"/>
			</>
		);
	}
}

//ReactDOM.render(<Test/>, document.getElementById("box"));
ReactDOM.render(<Test/>, document.querySelector("#box"));
ReactDOM.render(<Html/>, document.querySelector("#box2"));
