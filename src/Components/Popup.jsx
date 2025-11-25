function Popup({ visibility, text, msgStyle }) {
  return (
    visibility ? <div className="popup" >
      <div className="popup-content">
        <p style={{color: msgStyle}}>{text}</p>
      </div>
    </div> : ''
  );
}

export default Popup;
