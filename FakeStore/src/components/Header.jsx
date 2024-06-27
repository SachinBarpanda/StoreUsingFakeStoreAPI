import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {
    const cartProducts = useSelector(state => state.cart.items)
    return (
        <div className='sticky top-0 z-10 h-[10vh]'>
            <header className="text-gray-800 bg-white body-font">
                <div className="container mx-auto flex  p-5 items-center">
                    <a className="flex title-font sm:mb-4 font-medium  text-gray-800 mb-0 md:mb-0">
                       <svg xmlns="http://www.w3.org/2000/svg"  className=" sm:w-12 w-6"shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 444.444"><path fill-rule="nonzero" d="M194.554 18.514c-19.479 2.022-38.06 6.811-55.726 14.353-12.19 5.252-23.571 11.405-34.085 18.46a192.843 192.843 0 00-29.276 24.111 192.705 192.705 0 00-20.072 23.474h65.411c18.426-26.631 42.976-53.432 73.748-80.398zm41.675 185.414c-5.072 0-9.418-4.346-9.418-9.657 0-5.071 4.346-9.417 9.418-9.417h14.002c8.692.238 16.424 1.929 22.942 6.036 12.638 8.005 14.885 19.439 18.11 32.36h211.299c5.31 0 9.418 4.346 9.418 9.417 0 .965-.244 1.93-.483 2.894l-24.633 99.253c-.965 4.346-4.828 7.245-9.174 7.245H323.16c3.381 12.555 6.763 19.317 11.347 22.455 5.554 3.624 15.215 3.863 31.396 3.624H475.294c5.31 0 9.417 4.347 9.417 9.418 0 5.311-4.346 9.418-9.417 9.418H366.146c-20.043.239-32.36-.244-42.26-6.763-10.143-6.762-15.459-18.352-20.769-39.36l-32.36-122.434c0-.239 0-.239-.239-.482-1.452-5.311-3.863-8.936-7.244-10.865-3.381-2.173-7.971-3.142-13.282-3.142H236.229zm186.423 58.06c0-2.973 2.942-5.384 6.572-5.384 3.625 0 6.568 2.411 6.568 5.384v36.422c0 2.977-2.943 5.389-6.568 5.389-3.63 0-6.572-2.412-6.572-5.389v-36.422zm-39.337 0c0-2.973 2.943-5.384 6.572-5.384 3.625 0 6.568 2.411 6.568 5.384v36.422c0 2.977-2.943 5.389-6.568 5.389-3.629 0-6.572-2.412-6.572-5.389v-36.422zm-39.337 0c0-2.973 2.943-5.384 6.573-5.384 3.629 0 6.567 2.411 6.567 5.384v36.422c0 2.977-2.938 5.389-6.567 5.389-3.63 0-6.573-2.412-6.573-5.389v-36.422zm96.851-19.903v.01h-88.222v-.01h-56.009l21.491 80.895h152.377l20.043-80.895h-49.68zm6.212 155.997c12.799 0 23.181 10.382 23.181 23.181 0 12.799-10.382 23.181-23.181 23.181-12.799 0-23.181-10.382-23.181-23.181 0-12.799 10.382-23.181 23.181-23.181zm-101.664 0c12.798 0 23.181 10.382 23.181 23.181 0 12.799-10.383 23.181-23.181 23.181-12.799 0-23.181-10.382-23.181-23.181 0-12.799 10.382-23.181 23.181-23.181zm-73.241-13.861c-10.066 9.953-21.043 19.863-32.935 29.724 14.241-1.564 27.999-4.609 41.271-9.135a66.875 66.875 0 00-1.998 18.874c-19.839 5.934-40.574 8.901-62.186 8.901-14.889 0-29.378-1.407-43.424-4.219a207.195 207.195 0 01-40.428-12.506l-.473-.185c-13.052-5.608-25.359-12.278-36.876-20.005a211.105 211.105 0 01-31.902-26.26 210.393 210.393 0 01-26.27-31.916c-7.727-11.518-14.397-23.825-20.009-36.876-5.652-13.257-9.886-26.889-12.687-40.896C1.408 245.676 0 231.187 0 216.293c0-14.889 1.408-29.383 4.219-43.429a207.137 207.137 0 0112.502-40.423l.185-.473c5.612-13.052 12.282-25.359 20.009-36.876a210.399 210.399 0 0126.26-31.912 210.73 210.73 0 0131.912-26.265c11.517-7.727 23.824-14.397 36.895-20.004C158.369 5.642 186.496 0 216.288 0c14.894 0 29.378 1.408 43.424 4.219a207.435 207.435 0 0140.433 12.507l.473.185c13.051 5.607 25.353 12.272 36.871 20.004a210.898 210.898 0 0131.911 26.27 210.996 210.996 0 0126.266 31.907c7.731 11.517 14.392 23.824 20.004 36.876a208.463 208.463 0 0113.9 47.517h-17.656c-2.563-14.046-6.626-27.6-12.2-40.652-3.386-7.849-7.137-15.357-11.264-22.519h-65.499c12.565 21.159 21.256 42.216 26.128 63.171h-17.851c-5.364-20.847-14.903-41.899-28.652-63.171h-77.587v25.988a53.21 53.21 0 00-17.402 7.234v-33.222H130c-19.961 30.874-31.025 61.3-33.378 91.277h88.139a53.499 53.499 0 008.132 17.403H96.237c1.057 30.655 11.317 61.085 30.562 91.277h80.788v-77.148a53.013 53.013 0 0017.402 7.333v69.815h26.446l4.594 17.403h-31.04v69.504c14.831-12.117 28.199-24.268 40.107-36.457 2.07 6.299 4.36 12.068 7.04 17.5zm-64.549-50.547h-68.686c17.568 23.308 40.491 46.474 68.686 69.504v-69.504zm-90.05 0H55.395a193.153 193.153 0 0020.038 23.439 193.575 193.575 0 0029.31 24.146c10.514 7.055 21.895 13.208 34.089 18.445l.41.19a189.878 189.878 0 0037.022 11.411 195.765 195.765 0 0017.111 2.64c-31.868-26.421-57.188-53.173-75.838-80.271zM44.13 316.271h62.382c-17.393-30.006-26.66-60.427-27.62-91.277H17.578c.434 10.704 1.666 21.154 3.703 31.327 2.592 12.94 6.455 25.427 11.58 37.432 3.387 7.848 7.143 15.361 11.269 22.518zm-26.552-108.68h61.655c2.12-30.211 12.2-60.637 30.392-91.277H44.13c-4.126 7.157-7.878 14.67-11.254 22.524l-.19.409c-5.043 11.878-8.847 24.228-11.405 37.018-2.037 10.177-3.269 20.622-3.703 31.326zM142.155 98.912h65.432V30.148c-26.626 23.166-48.414 46.084-65.432 68.764zm82.834 0h65.427c-17.023-22.675-38.801-45.603-65.427-68.764v68.764zm86.781 0h65.411a193.457 193.457 0 00-20.038-23.44 193.278 193.278 0 00-29.311-24.145c-10.513-7.055-21.889-13.208-34.084-18.446l-.409-.19a190.085 190.085 0 00-37.028-11.41 196.276 196.276 0 00-18.289-2.767c30.772 26.966 55.322 53.767 73.748 80.398z"/></svg>
                        <span className="sm:ml-3 mr-2 sm:text-xl text-xs">Fake Store</span>
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link className="mr-5 sm:text-xl text-xs hover:text-gray-800" to={'/'}>Products</Link>
                        <Link className="mr-5 sm:text-xl text-xs hover:text-gray-800">Second Link</Link>
                        <Link className="mr-5 sm:text-xl text-xs hover:text-gray-800">Third Link</Link>
                        <Link className="mr-5 hover:text-gray-800 sm:text-xl text-xs">Fourth Link</Link>
                    </nav>
                    <Link className="inline-flex items-center bg-gray-800 border-0 py-2 px-4 focus:outline-none hover:bg-gray-900 rounded text-white mt-0 sm:mt-4 md:mt-0" to={"/cart"} >
                        <svg className='w-5 h-5 ml-2' fill="#FFF" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 902.86 902.86" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"></path> <path d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717 c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744 c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742 C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744 c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742 S619.162,694.432,619.162,716.897z"></path> </g> </g> </g></svg>
                        <sup>{cartProducts.length}</sup>
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default Header