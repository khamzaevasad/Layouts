function Form() {
  return (
    <div>
      <h1>Send us Questions</h1>
      <form className="form-container">
        <label className="form-control">
          <span>Your Email:</span>
          <input type="text" />
        </label>
        <label className="form-control">
          <span>Your Email:</span>
          <textarea></textarea>
        </label>
        <button className="button">Send</button>
      </form>
    </div>
  );
}

export default Form;
