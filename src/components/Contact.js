import './Contact.css';

export function Contact(){
    return (
        <div className="Contact">
            <img src="https://randomuser.me/api/portraits/men/75.jpg" className="avatar" alt="avatar"/>
            <div>
                <div className="name">Brad Gibson</div>
                <div className="status">
                    <div className="status-online"></div>
                    <div className="status-text">online</div>
                </div>
            </div>
        </div>
    )
}