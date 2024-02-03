import Illustration from "../Illustration";
import SingupForm from './../SingupForm';

const Signup = () => {
     return (
          <div>
               <h1>Create an account</h1>
               <div className="column">
                    <Illustration />
                    <SingupForm/>
               </div>
          </div>
     );
};

export default Signup;