const Visit = () => {
  return (
    <div className="Visit">
      <div className="Visit-Headings">
        <h1>Visit Us</h1>
        <p>Come experience the art in person for yourself.</p>
      </div>
      <div className="Visit-Content">
        <table>
          <tr>
            <th className="vertical-line">Address:</th>
            <td>123 Main St, Anytown USA</td>
          </tr>
          <tr>
            <th className="vertical-line">Opening Hours:</th>
            <td>
              Wednesday to Sunday
              <br />
              10:00am to 6:00pm
            </td>
          </tr>
          <tr>
            <th className="vertical-line">Tickets:</th>
            <td>
              General: $12
              <br />
              Senior Citizens: $10
              <br />
              Students: $8
              <br />
              Children under 12: free
              <br />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Visit;
