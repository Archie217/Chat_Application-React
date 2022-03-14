const TheirMessage = ({lastMessage, message}) => {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;
    return (
        <div className="message-row">
            {isFirstMessageByUser && (
                <div 
                    className="message-avatar"
                    style = {{backgroundImage : `url(${message?.sender?.avatar})`}} //if the avatar of the sender exists then that will be the background of it.
                />
            )}
            { message?.attachments?.length > 0  //checks if the message is an image
                ? (
            <img 
                src = {message.attachments[0].file}
                alt = "message-attachment"
                className="message-image"
                style = {{marginLeft : isFirstMessageByUser ? '4px' : '48px'}}
            />
        ) : (
            <div className="message" style = {{ float :'left' ,marginLeft : isFirstMessageByUser ? '4px' : '48px',  backgroundColor: '#CABCDC'}}>
                {message.text}
            </div>
        )
            }
        </div>
    )
}
export default TheirMessage;