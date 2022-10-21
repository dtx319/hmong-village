import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import FeaturedMember from '../components/FeaturedMember';
import Member from '../components/Member';
import { DataContext } from '../contexts/DataProvider'

function Members() {
  const [member, setMember] = useState({})
  const { uid } = useParams()
  const { getUser, members } = useContext(DataContext)

  useEffect(() => {
    getUser(uid, setMember)
  }, [])

  const[featuredMember, setFeaturedMember] = useState(member[0])

    return (
        <div className="App">
            <header className="App-header">
                <h2>Featured Member</h2>
                <FeaturedMember member={featuredMember} />
                <hr />
                {members.map((member) => <Member clickHandler={setFeaturedMember} key={uid} preview={true} member={member} />)}
            </header>
        </div>
    );
}

export default Members;
