// <Route path='/mail/file' element={<h1>file</h1>}/>
import { useParams } from 'react-router'

const MailboxFile = (props) => {
    console.log(props)

    // const params = useParams()
    // console.log(params, "< --- params")
    const { mailId } = useParams()
    const chosenMail = props.mailList.find((mail) => {
        return mail._id === Number(mailId)
    })
    console.log(mailId)
    console.log(chosenMail)

    return (
        <>
            <h1>{chosenMail.boxHolder} { }</h1>
            <dl>
                <dt>Box Size</dt>
                <dd>{chosenMail.boxSize}</dd>
            </dl>
        </>

    )
}

export default MailboxFile