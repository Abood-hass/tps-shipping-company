export const About = (props) => {
  return (
    <div id="about" dir="rtl">
      <div className="container">
        <div className="row">
          
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>نحن</h2>
              <p className="aboutText">{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>لماذا نحن ؟</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                {/*<div className="col-lg-6 col-sm-6 col-xs-12">*/}
                {/*  <ul>*/}
                {/*    {props.data*/}
                {/*      ? props.data.Why2.map((d, i) => (*/}
                {/*          <li key={`${d}-${i}`}> {d}</li>*/}
                {/*        ))*/}
                {/*      : "loading"}*/}
                {/*  </ul>*/}
                {/*</div>*/}
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/directly-above-shot-delivery-men-260nw-366405377.jpg" className="img-responsive" alt="" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
