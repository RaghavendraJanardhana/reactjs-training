import React, { Component } from "react";
class GoogleMap extends Component {
  render() {
    return (
      <section id="mu-google-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d589888.4396405783!2d-82.41588603632052!3d32.866951223053896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f9f727a4ed30eb%3A0xf2139b0c5c7ae1ec!2sDooley+Branch+Rd%2C+Millen%2C+GA+30442%2C+USA!5e0!3m2!1sen!2sbd!4v1497376364225"
          width="100%"
          height="500"
          frameborder="0"
          style="border:0"
          allowfullscreen
        ></iframe>
      </section>
    );
  }
}
export default GoogleMap;
