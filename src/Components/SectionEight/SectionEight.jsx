import React from "react";
import "./SectionEight.css";
import { EmailOutlined, PhoneOutlined } from "@mui/icons-material";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";

function SectionEight() {
  return (
    <div className="sectionEight_container" id="section-eight">
      <div className="sec-eight-header">
        <h1>Contact Remine India</h1>
        <span>Get in touch</span>
      </div>

      <div className="sec-eight-form">
        <div className="sec-eight-form-1">
          <div className="sec-eight-form-1-inner">
            <div className="social-link-holder">
              <div className="social-icon-holder">
                <PhoneOutlined />
              </div>
              <div className="social-link">
                <div className="social-tag">
                  <span>Call Me</span>
                </div>
                <div className="social-username">+91 7620707855</div>
              </div>
            </div>
            <div className="social-link-holder">
              <div className="social-icon-holder">
                <EmailOutlined />
              </div>
              <div className="social-link">
                <div className="social-tag">
                  <span>Email</span>
                </div>
                <div className="social-username">remine.india@gmail.com</div>
              </div>
            </div>
            <div className="social-link-holder">
              <div className="social-icon-holder">
                <BsInstagram />
              </div>
              <div className="social-link">
                <div className="social-tag">
                  <span>Instagram</span>
                </div>
                <div className="social-username">remine_india</div>
              </div>
            </div>
            <div className="social-link-holder">
              <div className="social-icon-holder">
                <BsLinkedin />
              </div>
              <div className="social-link">
                <div className="social-tag">
                  <span>LinkedIn</span>
                </div>
                <div className="social-username">Remine India</div>
              </div>
            </div>
            <div className="social-link-holder">
              <div className="social-icon-holder">
                <BsGithub />
              </div>
              <div className="social-link">
                <div className="social-tag">
                  <span>GitHub</span>
                </div>
                <div className="social-username">RemineIndia</div>
              </div>
            </div>
          </div>
        </div>
        <div className="sec-eight-form-2">
          <form
            className="sec-eight-form-inner"
            action="https://formspree.io/f/mjvdblkg"
            method="POST"
          >
            <div className="form-inner-sections form-section-1">
              <div className="form-section-1_1">
                <span>Name</span>
                <input type="text" name="Sender" autoComplete="off" required />
              </div>

              <div className="form-section-1_1">
                <span>Email</span>
                <input type="email" name="Email" autoComplete="off" required />
              </div>
            </div>
            <div className="form-inner-sections form-section-2">
              <div className="form-section-2_1">
                <span>Subject</span>
                <input type="text" name="Project" />
              </div>
            </div>
            <div className="form-inner-sections form-section-3">
              <div className="form-section-3_1">
                <span>Message</span>
                <textarea name="Message"></textarea>
              </div>
            </div>
            <div className="form-inner-sections form-section-4">
              <input type="submit" value="Send Message" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SectionEight;
