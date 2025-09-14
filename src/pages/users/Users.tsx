import { memo} from "react";
import Users from "../../components/users/Users";


const User = () => {

  return (
    <div className="container">
        <Users/>
    </div>
  );
};

export default memo(User);
