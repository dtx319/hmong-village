import Member from '../components/Member';
import FeaturedMember from '../components/FeaturedMember';
import { useState } from 'react';

function Members() {
  const [members, setMembers] = useState([
    {
      "id": 1,
      "firstName": "Dennis",
      "lastName": "Xiong",
      "state": "California",
      "city": "Merced",
      "age": 28
    },
    {
      "id": 2,
      "firstName": "Pachia",
      "lastName": "Xiong",
      "state": "California",
      "city": "Merced",
      "age": 24
    }
  ])

  const[featuredMember, setFeaturedMember] = useState(members[0])

    return (
        <div className="App">
            <header className="App-header">
                <h2>Featured Member</h2>
                <FeaturedMember member={featuredMember} />
                <hr />
                {members.map((member) => <Member clickHandler={setFeaturedMember} key={member.id} member={member} />)}
            </header>
        </div>
    );
}

export default Members;
