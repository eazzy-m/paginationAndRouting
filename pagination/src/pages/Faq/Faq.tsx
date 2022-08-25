import {FC} from 'react';


const style: {width: string, marginTop: string, fontSize: string} = {
    width: "100%",
    marginTop: "20px",
    fontSize: "14px"
}

interface title {
    title: string
}

const Faq: FC<title> = ({title}) => {
    return (
        <div className="page">
            <h1>{title}</h1>
            <div className="window custom-window">
                <div className="title-bar">
                    <h2 className="title">Dialog Title</h2>
                </div>
                <div className="window-pane custom-window-pane">
                    Woo I got stuff in me!
                    <br/>
                    <div className="standard-dialog center" style={style}>
                        <h2 className="dialog-text">The Macintosh Finder, Version 1.0 (18 Jan 84)</h2>
                        <p className="dialog-text">&copy; 1984 Apple Computer</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;