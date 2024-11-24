
const loginId = document.querySelector('#username');
const loginPw = document.querySelector('#pw');
const loginBtn = document.querySelector('#loginbtn');

/*이름입력칸과 비밀번호 입력칸중 하나라도 공백이면 경고창 출력하고 
그외에는  이름에 입력된값을 로컬스토리지에 저장 후 AQ.html(메인페이지)로 이동하는 login()함수 선언*/
function login()
{
    
    if(loginId.value=="" || loginPw.value=="")
    {
        alert("이름과 비밀번호를 모두 입력해 주세요.");
    }
    else
    {
         const username=loginId.value;
         localStorage.setItem('Name', username);
         location.replace('AQ.html');
         alert("로그인 되었습니다");
        
    }
}


//로그인버튼 클릭시 login()함수 참조
loginBtn.addEventListener('click',login);


//문서 내에서  엔터키를 눌렀을때도 login()함수 호출
document.addEventListener('keydown',(e)=>
{if(e.key==='Enter')
{
    login();
}});






