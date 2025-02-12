import { Link } from "react-router-dom";

const MailboxList = (props) => { //passed down from App
    console.log('props',props)
    return (
        <>
            <h1>List</h1>
            <ul>
            {props.mailList.map((currentMail) => (
                
                    <li key={currentMail._id}>

                      <Link to={`/mail/${currentMail._id}`}>{currentMail.boxHolder}</Link>
                    </li>
                ))}
                </ul>
        </>
    )
}

export default MailboxList


/*
  <Link to={`/mail/${currentMail._id}`}>
                            Mailbox {currentMail._id}
                        </Link>


                           <link to='/mail/:mailId'></link>
*/
