import './App.css';
import Grandpa from './components/Grandpa/Grandpa';
// import ReusableForm from './components/ReusableForm/ReusableForm';

function App() {
  // const handleSignUpSubmit = data => {
  //   console.log('sign up', data);
  // };

  // const handleUpdateProfile = data => {
  //   console.log('update profile', data);
  // };

  return (
    <>
      <h1>Frome Master</h1>

      <Grandpa></Grandpa>


      
      {/* প্রথম ফর্মটি সাইন আপের জন্য */}
      {/* <ReusableForm formTitle="Sign Up" handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>Please sign up right now.</p>
        </div>
      </ReusableForm> */}

      {/* দ্বিতীয় ফর্মটি প্রোফাইল আপডেটের জন্য */}
      {/* <ReusableForm formTitle="Profile Update" submitBtnText="Update" handleSubmit={handleUpdateProfile}>
        <div>
          <h2>Profile Update</h2>
          <p>Update your profile information.</p>
        </div>
      </ReusableForm> */}
    </>
  );
}

export default App;
