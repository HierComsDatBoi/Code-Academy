const Header = () => {
  return (
    <>
      <header>
        <div className="logo">
          <img src="https://upload.wikimedia.org/wikipedia/en/6/61/National_Distributist_Party_logo_nobg.png?20240628232334"
            alt="tiesiog random logo" />
        </div>
        <div className="userInfo">
          <span>Pazymetu kiekis:</span>
            <span>UserName</span>
          <span>
            <img 
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png?20200919003010"
            alt="userIcon" 
             />
            </span>
        </div>
      </header>
    </>
  );
}

export default Header;