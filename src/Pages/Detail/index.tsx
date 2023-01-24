import React from "react";
import Header from "../../components/Header";

function Detail() {
  return (
    <div>
      <Header />
      <main id="Detail">
        <div className="container text-center">
          <div className="row text-center">
            <div className="col-sm-6">
              <img
                id="event"
                src="https://res.cloudinary.com/dhohircloud/image/upload/v1674498900/music/music-app/-tulus.jpg.jpg"
                alt=""
              />

              <p>Add to Playlist</p>
            </div>
            <div className="detail_event   text-black col-sm-6">
              <div id="detail-event-2">
                <h2 className="mt-5">Album Detail</h2>
                <p>
                  <a href="">Read More</a>
                </p>
                <br />
                <div className="pay">
                  <button type="button" className="btn btn-primary btn-lg mt-4">
                    Play
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Detail;
