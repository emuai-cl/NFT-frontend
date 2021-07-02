import React, { Component } from "react"
import {
  SiTiktok,
  SiFacebook,
  SiInstagram,
  SiLinkedin,
  SiGithub,
  SiTelegram,
} from "react-icons/si"

export class Footer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      query: "",
    }
  }
  render() {
    return (
      <div>
        <footer class="footer bg-gray-50 relative pt-1 border-b-2 border-blue-700">
          <div class="container mx-auto px-6">
            <div class="sm:flex sm:mt-8">
              <div class="mt-8 sm:mt-0  sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                <div class="flex flex-col">
                  <span class="font-bold text-gray-700 uppercase mb-2">
                    Social media
                  </span>
                  <div class="flex flex-row mt-4 space-x-2">
                    <div class="flex flex-col">
                      <a
                        href="https://www.instagram.com/emuai_chile/"
                        class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
                      >
                        <SiInstagram />
                      </a>
                    </div>
                    <div class="flex flex-col">
                      <a
                        href="https://github.com/emuai-cl"
                        class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
                      >
                        <SiGithub />
                      </a>
                    </div>
                    <div class="flex flex-col">
                      <a
                        href="https://www.linkedin.com/company/electromovilidad-uai/"
                        class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
                      >
                        <SiLinkedin />
                      </a>
                    </div>
                    <div class="flex flex-col">
                      <a
                        href="#"
                        class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
                      >
                        <SiTelegram />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col">
                  <span class="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">
                    Contact us
                  </span>
                  <span class="my-2">contact@myemus.info</span>
                </div>
                <div class="flex flex-col">
                  <span class="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">
                    Us
                  </span>
                  <span class="my-2">
                    <a href="#" class="  text-md hover:text-blue-500">
                      Terms & conditions
                    </a>
                  </span>
                  <span class="my-2">
                    <a href="#" class="  text-md hover:text-blue-500">
                      Our team
                    </a>
                  </span>
                  <span class="my-2">
                    <a href="/FAQ" class="  text-md hover:text-blue-500">
                      FAQ
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}
