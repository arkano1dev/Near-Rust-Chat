const contract =
  "ece61a112fbb05b5ff96fd4d63cb259c4bae966477829666d46ddc4e5121d801";

State.init({
  message: "",
  img: null,
});

const messages = Near.view(contract, "get_messages", { limit: 5 });

const Message = styled.div`
  display: flex;
  gap: 3em;
`;

const SendControls = styled.div`
  display: flex;
  gap: 5em;
  margin: 2 em;
`;

const sendMessage = () => {
  if (state.message.length != 0) {
    Near.call(contract, "send", {
      text: state.message,
    });
  }
};

const uploadFileUpdateState = (body) => {
  asyncFetch("https://ipfs.near.social/add", {
    method: "POST",
    headers: { Accept: "application/json" },
    body,
  }).then((res) => {
    const cid = res.body.cid;
    State.update({ img: { cid } });
  });
};

const filesOnChange = (files) => {
  if (files) {
    State.update({ img: { uploading: true, cid: null } });
    uploadFileUpdateState(files[0]);
  }
};

return (
  <>
    {messages.reverse().map((message) => (
      <Message>
        <Widget
          src="calebjacob.near/widget/AccountProfile"
          props={{
            accountId: message.author,
          }}
        />
        <Widget
          src="andyh.near/widget/TimeAgo"
          props={{
            blockHeight: message.block_height,
          }}
        />
        <p>{message.text}</p>
      </Message>
    ))}

    <div className="d-flex justify-content-end">
      {state.img ? (
        <img
          class="rounded w-100 h-100"
          style={{ objectFit: "cover" }}
          src={`https://ipfs.near.social/ipfs/${state.img.cid}`}
          alt="upload preview"
        />
      ) : (
        ""
      )}
      <Files
        multiple={false}
        minFileSize={1}
        clickable
        className="btn btn-primary mt-2"
        onChange={filesOnChange}
      >
        {state.img?.uploading ? <> Uploading </> : "Upload a File"}
      </Files>
    </div>
    <p />
    <SendControls>
      <input
        type="text"
        onInput={(e) => State.update({ message: e.target.value })}
        value={state.message}
      />
      <button
        onClick={() => {
          sendMessage();
        }}
      >
        Send
      </button>
    </SendControls>
  </>
);
