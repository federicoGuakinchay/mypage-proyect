import DashboardTemplate from "../DashboardTemplate"
import UserCard from "../../../components/userCard"
import { RootState } from "@redux/reducers"
import { useSelector } from "react-redux"
import { useState } from "react";

function Users() {
  const user = useSelector((state: RootState) => state.auth.user) || {};
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <DashboardTemplate>
      {/* Conditional rendering for "add a new user" button */}
      {user.role === "STAFF" || user.role === "SuperUser" ? (
        <div className="flex w-full justify-end mb-[25px]">
          <button className="button-add">add a new user</button>
        </div>
      ) : null}

      <div className="w-full h-full">
        {/* Search Input */}
        <input
          type="search"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        {/* UserCard */}
        {user && <UserCard user={user} />}
      </div>
    </DashboardTemplate>
  );
}

export default Users;
