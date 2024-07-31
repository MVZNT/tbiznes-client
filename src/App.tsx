import {Navbar} from "./components";
import {Carousel} from "antd";
import {FiHeart} from "react-icons/fi";
import {IoCallOutline} from "react-icons/io5";


function App() {
  return (
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="px-20 flex-grow">
          <div className="container mx-auto flex flex-col gap-5 mt-7">
              <div className={"flex justify-between gap-3 w-full"}>
                  <div className={"flex gap-1 cursor-pointer items-center justify-center bg-black-primary rounded-lg font-medium py-2 text-white w-[200px]"}>
                      <img src="/category-search.svg" alt="#"/>
                      <span>Все категории</span>
                  </div>

                  <form className={"border border-[#969696] pr-1 pl-3 rounded-lg flex justify-between items-center w-full"}>
                    <input className={"outline-none w-full pr-2"} placeholder={"Поиск по объявлениям"}/>
                    <button className={"py-1 w-[78px] flex justify-center font-medium rounded-lg bg-black-primary text-white"}>Найти</button>
                  </form>
              </div>

              <Carousel autoplay arrows draggable >
                  <div className={"h-[340px] bg-[#353847] rounded-2xl "}>
                      <div className={"flex justify-between"}>
                          <div className={"flex flex-col justify-center pl-20 gap-5"}>
                              <h1
                                  className={"font-bold text-[38px] text-white font-pragmaticaBold leading-10"}
                              >
                                  Продавайте и покупайте с легкостью!
                              </h1>

                              <p
                                  className={"text-[18px] text-white w-[80%] leading-6"}
                              >
                                  Найдите лучшие предложения и продайте свои товарыв два клика. Быстро, удобно и
                                  безопасно!
                              </p>

                              <button
                                  className={"flex justify-center py-[10px] rounded-lg bg-white text-black w-[212px] font-medium text-base"}
                              >
                                  Заказать размещение
                              </button>
                          </div>

                          <div
                              className="w-[600px] h-[340px] bg-cover bg-center rounded-r-2xl"
                              style={{backgroundImage: 'url(/sample-banner-image.jpg)'}}
                          ></div>
                      </div>
                  </div>

                  <div className={"h-[340px] bg-[#353847] rounded-2xl "}>
                      <div className={"flex justify-between"}>
                          <div className={"flex flex-col justify-center pl-20 gap-5"}>
                              <h1
                                  className={"font-bold text-[38px] text-white font-pragmaticaBold leading-10"}
                              >
                                  Продавайте и покупайте с легкостью!
                              </h1>

                              <p
                                  className={"text-[18px] text-white w-[80%] leading-6"}
                              >
                                  Найдите лучшие предложения и продайте свои товарыв два клика. Быстро, удобно и
                                  безопасно!
                              </p>

                              <button
                                  className={"flex justify-center py-[10px] rounded-lg bg-white text-black w-[212px] font-medium text-base"}
                              >
                                  Заказать размещение
                              </button>
                          </div>

                          <div
                              className="w-[600px] h-[340px] bg-cover bg-center rounded-r-2xl"
                              style={{backgroundImage: 'url(/public/sample-banner-image.jpg)'}}
                          ></div>
                      </div>
                  </div>
              </Carousel>

              {/* Categories */}
              <div className={"flex flex-col gap-4 mt-10"}>
                    <span className={"font-pragmaticaBold text-3xl text-center"}>Популярные категории</span>

                  <div className={"grid grid-cols-5 gap-7 mt-10"}>
                      <div className={"flex flex-col gap-2 rounded-2xl bg-[#F2F1F0]"}>
                          <span className={"text-[18px] font-bold ml-4 mt-3"}>Услуги</span>
                          <img src="/category-sample-image.svg" alt="#" className={"w-full h-[131px] rounded-b-2xl"}/>
                      </div>

                      <div className={"flex flex-col gap-2 rounded-2xl bg-[#F2F1F0]"}>
                          <span className={"text-[18px] font-bold ml-4 mt-3"}>Производство</span>
                          <img src="/category-sample-image-2.svg" alt="#" className={"w-full h-[131px] rounded-b-2xl"}/>
                      </div>

                      <div className={"flex flex-col gap-2 rounded-2xl bg-[#F2F1F0]"}>
                          <span className={"text-[18px] font-bold ml-4 mt-3"}>Торговля</span>
                          <img src="/category-sample-image-3.svg" alt="#" className={"w-full h-[131px] rounded-b-2xl"}/>
                      </div>

                      <div className={"flex flex-col gap-2 rounded-2xl bg-[#F2F1F0]"}>
                          <span className={"text-[18px] font-bold ml-4 mt-3"}>Недвижимость</span>
                          <img src="/category-sample-image-4.svg" alt="#" className={"w-full h-[131px] rounded-b-2xl"}/>
                      </div>

                      <div className={"flex flex-col gap-2 rounded-2xl bg-[#F2F1F0]"}>
                          <span className={"text-[18px] font-bold ml-4 mt-3"}>IT</span>
                          <img src="/category-sample-image-5.svg" alt="#" className={"w-full h-[131px] rounded-b-2xl"}/>
                      </div>
                  </div>
              </div>

              {/*  Posts  */}
              <div className={"flex flex-col gap-4 mt-10"}>
                  <span className={"font-pragmaticaBold text-3xl text-center"}>Последние объявления</span>

                  <div className={"grid grid-cols-3 gap-7 mt-10"}>
                      <div className={"flex flex-col gap-2 rounded-t-2xl w-[410px]"}>
                          <div
                              className={"h-[250px] w-full rounded-2xl flex justify-between items-start px-4 pt-4"}
                              style={{backgroundImage: 'url(/post-sample.jpg)'}}
                          >
                                  <span
                                      className={"bg-white bg-opacity-90 text-black px-3 py-1 rounded-full text-sm font-bold"}
                                  >
                                      Сервисный центр
                                  </span>

                              <div className={"p-2 rounded-full bg-white"}>
                                  <FiHeart className={"text-[#353847] text-[19px]"}/>
                              </div>
                          </div>

                          <span className={"font-bold"}>$40 000</span>

                          <span className={"font-pragmaticaBold"}>Продается действующий бизнес! Компания с сервисной лицензией Canon</span>

                          <div className={"flex flex-col gap-1"}>
                              <span
                                  className={"font-bold text-[#646464] text-sm"}>Ташкент, Мирзо-Улугбекский район</span>
                              <div className={"flex gap-2 text-sm text-[#646464]"}>
                                  <span>Опубликовано: 14.06.2024</span>
                                  •
                                  <span>Обновлено: сегодня, 20:10</span>
                              </div>
                          </div>
                      </div>
                      <div className={"flex flex-col gap-2 rounded-t-2xl w-[410px]"}>
                          <div
                              className={"h-[250px] w-full rounded-2xl flex justify-between items-start px-4 pt-4"}
                              style={{backgroundImage: 'url(/post-sample.jpg)'}}
                          >
                                  <span
                                      className={"bg-white bg-opacity-90 text-black px-3 py-1 rounded-full text-sm font-bold"}
                                  >
                                      Сервисный центр
                                  </span>

                              <div className={"p-2 rounded-full bg-white"}>
                                  <FiHeart className={"text-[#353847] text-[19px]"}/>
                              </div>
                          </div>

                          <span className={"font-bold"}>$40 000</span>

                          <span className={"font-pragmaticaBold"}>Продается действующий бизнес! Компания с сервисной лицензией Canon</span>

                          <div className={"flex flex-col gap-1"}>
                              <span
                                  className={"font-bold text-[#646464] text-sm"}>Ташкент, Мирзо-Улугбекский район</span>
                              <div className={"flex gap-2 text-sm text-[#646464]"}>
                                  <span>Опубликовано: 14.06.2024</span>
                                  •
                                  <span>Обновлено: сегодня, 20:10</span>
                              </div>
                          </div>
                      </div>
                      <div className={"flex flex-col gap-2 rounded-t-2xl w-[410px]"}>
                          <div
                              className={"h-[250px] w-full rounded-2xl flex justify-between items-start px-4 pt-4"}
                              style={{backgroundImage: 'url(/post-sample.jpg)'}}
                          >
                                  <span
                                      className={"bg-white bg-opacity-90 text-black px-3 py-1 rounded-full text-sm font-bold"}
                                  >
                                      Сервисный центр
                                  </span>

                              <div className={"p-2 rounded-full bg-white"}>
                                  <FiHeart className={"text-[#353847] text-[19px]"}/>
                              </div>
                          </div>

                          <span className={"font-bold"}>$40 000</span>

                          <span className={"font-pragmaticaBold"}>Продается действующий бизнес! Компания с сервисной лицензией Canon</span>

                          <div className={"flex flex-col gap-1"}>
                              <span
                                  className={"font-bold text-[#646464] text-sm"}>Ташкент, Мирзо-Улугбекский район</span>
                              <div className={"flex gap-2 text-sm text-[#646464]"}>
                                  <span>Опубликовано: 14.06.2024</span>
                                  •
                                  <span>Обновлено: сегодня, 20:10</span>
                              </div>
                          </div>
                      </div>
                      <div className={"flex flex-col gap-2 rounded-t-2xl w-[410px]"}>
                          <div
                              className={"h-[250px] w-full rounded-2xl flex justify-between items-start px-4 pt-4"}
                              style={{backgroundImage: 'url(/post-sample.jpg)'}}
                          >
                                  <span
                                      className={"bg-white bg-opacity-90 text-black px-3 py-1 rounded-full text-sm font-bold"}
                                  >
                                      Сервисный центр
                                  </span>

                              <div className={"p-2 rounded-full bg-white"}>
                                  <FiHeart className={"text-[#353847] text-[19px]"}/>
                              </div>
                          </div>

                          <span className={"font-bold"}>$40 000</span>

                          <span className={"font-pragmaticaBold"}>Продается действующий бизнес! Компания с сервисной лицензией Canon</span>

                          <div className={"flex flex-col gap-1"}>
                              <span
                                  className={"font-bold text-[#646464] text-sm"}>Ташкент, Мирзо-Улугбекский район</span>
                              <div className={"flex gap-2 text-sm text-[#646464]"}>
                                  <span>Опубликовано: 14.06.2024</span>
                                  •
                                  <span>Обновлено: сегодня, 20:10</span>
                              </div>
                          </div>
                      </div>
                      <div className={"flex flex-col gap-2 rounded-t-2xl w-[410px]"}>
                          <div
                              className={"h-[250px] w-full rounded-2xl flex justify-between items-start px-4 pt-4"}
                              style={{backgroundImage: 'url(/post-sample.jpg)'}}
                          >
                                  <span
                                      className={"bg-white bg-opacity-90 text-black px-3 py-1 rounded-full text-sm font-bold"}
                                  >
                                      Сервисный центр
                                  </span>

                              <div className={"p-2 rounded-full bg-white"}>
                                  <FiHeart className={"text-[#353847] text-[19px]"}/>
                              </div>
                          </div>

                          <span className={"font-bold"}>$40 000</span>

                          <span className={"font-pragmaticaBold"}>Продается действующий бизнес! Компания с сервисной лицензией Canon</span>

                          <div className={"flex flex-col gap-1"}>
                              <span
                                  className={"font-bold text-[#646464] text-sm"}>Ташкент, Мирзо-Улугбекский район</span>
                              <div className={"flex gap-2 text-sm text-[#646464]"}>
                                  <span>Опубликовано: 14.06.2024</span>
                                  •
                                  <span>Обновлено: сегодня, 20:10</span>
                              </div>
                          </div>
                      </div>
                      <div className={"flex flex-col gap-2 rounded-t-2xl w-[410px]"}>
                          <div
                              className={"h-[250px] w-full rounded-2xl flex justify-between items-start px-4 pt-4"}
                              style={{backgroundImage: 'url(/post-sample.jpg)'}}
                          >
                                  <span
                                      className={"bg-white bg-opacity-90 text-black px-3 py-1 rounded-full text-sm font-bold"}
                                  >
                                      Сервисный центр
                                  </span>

                              <div className={"p-2 rounded-full bg-white"}>
                                  <FiHeart className={"text-[#353847] text-[19px]"}/>
                              </div>
                          </div>

                          <span className={"font-bold"}>$40 000</span>

                          <span className={"font-pragmaticaBold"}>Продается действующий бизнес! Компания с сервисной лицензией Canon</span>

                          <div className={"flex flex-col gap-1"}>
                              <span
                                  className={"font-bold text-[#646464] text-sm"}>Ташкент, Мирзо-Улугбекский район</span>
                              <div className={"flex gap-2 text-sm text-[#646464]"}>
                                  <span>Опубликовано: 14.06.2024</span>
                                  •
                                  <span>Обновлено: сегодня, 20:10</span>
                              </div>
                          </div>
                      </div>
                      <div className={"flex flex-col gap-2 rounded-t-2xl w-[410px]"}>
                          <div
                              className={"h-[250px] w-full rounded-2xl flex justify-between items-start px-4 pt-4"}
                              style={{backgroundImage: 'url(/post-sample.jpg)'}}
                          >
                                  <span
                                      className={"bg-white bg-opacity-90 text-black px-3 py-1 rounded-full text-sm font-bold"}
                                  >
                                      Сервисный центр
                                  </span>

                              <div className={"p-2 rounded-full bg-white"}>
                                  <FiHeart className={"text-[#353847] text-[19px]"}/>
                              </div>
                          </div>

                          <span className={"font-bold"}>$40 000</span>

                          <span className={"font-pragmaticaBold"}>Продается действующий бизнес! Компания с сервисной лицензией Canon</span>

                          <div className={"flex flex-col gap-1"}>
                              <span
                                  className={"font-bold text-[#646464] text-sm"}>Ташкент, Мирзо-Улугбекский район</span>
                              <div className={"flex gap-2 text-sm text-[#646464]"}>
                                  <span>Опубликовано: 14.06.2024</span>
                                  •
                                  <span>Обновлено: сегодня, 20:10</span>
                              </div>
                          </div>
                      </div>
                      <div className={"flex flex-col gap-2 rounded-t-2xl w-[410px]"}>
                          <div
                              className={"h-[250px] w-full rounded-2xl flex justify-between items-start px-4 pt-4"}
                              style={{backgroundImage: 'url(/post-sample.jpg)'}}
                          >
                                  <span
                                      className={"bg-white bg-opacity-90 text-black px-3 py-1 rounded-full text-sm font-bold"}
                                  >
                                      Сервисный центр
                                  </span>

                              <div className={"p-2 rounded-full bg-white"}>
                                  <FiHeart className={"text-[#353847] text-[19px]"}/>
                              </div>
                          </div>

                          <span className={"font-bold"}>$40 000</span>

                          <span className={"font-pragmaticaBold"}>Продается действующий бизнес! Компания с сервисной лицензией Canon</span>

                          <div className={"flex flex-col gap-1"}>
                              <span
                                  className={"font-bold text-[#646464] text-sm"}>Ташкент, Мирзо-Улугбекский район</span>
                              <div className={"flex gap-2 text-sm text-[#646464]"}>
                                  <span>Опубликовано: 14.06.2024</span>
                                  •
                                  <span>Обновлено: сегодня, 20:10</span>
                              </div>
                          </div>
                      </div>
                      <div className={"flex flex-col gap-2 rounded-t-2xl w-[410px]"}>
                          <div
                              className={"h-[250px] w-full rounded-2xl flex justify-between items-start px-4 pt-4"}
                              style={{backgroundImage: 'url(/post-sample.jpg)'}}
                          >
                                  <span
                                      className={"bg-white bg-opacity-90 text-black px-3 py-1 rounded-full text-sm font-bold"}
                                  >
                                      Сервисный центр
                                  </span>

                              <div className={"p-2 rounded-full bg-white"}>
                                  <FiHeart className={"text-[#353847] text-[19px]"}/>
                              </div>
                          </div>

                          <span className={"font-bold"}>$40 000</span>

                          <span className={"font-pragmaticaBold"}>Продается действующий бизнес! Компания с сервисной лицензией Canon</span>

                          <div className={"flex flex-col gap-1"}>
                              <span
                                  className={"font-bold text-[#646464] text-sm"}>Ташкент, Мирзо-Улугбекский район</span>
                              <div className={"flex gap-2 text-sm text-[#646464]"}>
                                  <span>Опубликовано: 14.06.2024</span>
                                  •
                                  <span>Обновлено: сегодня, 20:10</span>
                              </div>
                          </div>
                      </div>

                  </div>

                  <div className={"flex justify-center mt-10"}>
                      <span
                          className={"rounded-lg py-[10px] w-[260px] bg-[#1D2023] text-center text-white font-bold cursor-pointer"}
                      >
                          Еще объявления
                      </span>
                  </div>
              </div>
          </div>
        </main>
          
          <footer className="px-20 mt-16 bg-black-primary py-8 flex flex-col gap-16">
              <div className="container mx-auto grid grid-cols-5 gap-5 ">
                  <img src="/logo_desktop.svg" alt="#" className={"max-h-10"}/>

                  <ul className={"text-white flex flex-col gap-3"}>
                      <li className={"cursor-pointer"}>Франшизы</li>
                      <li className={"cursor-pointer"}>Бизнес планы</li>
                      <li className={"cursor-pointer"}>Бизнес идеи</li>
                  </ul>

                  <ul className={"text-white flex flex-col gap-3"}>
                      <li className={"cursor-pointer"}>Бизнес услуги</li>
                      <li className={"cursor-pointer"}>Оптовая торговля</li>
                  </ul>

                  <div className={"text-white flex flex-col gap-3"}>
                      <span className={"font-bold"}>По вопросам рекламы</span>
                      <div className={"flex gap-1 items-center"}>
                          <IoCallOutline className={"text-xl text-white text-opacity-70"}/>
                          <a href={"tel:998770166601"}>+998 77 016-66-01</a>
                      </div>
                  </div>

                  <div className={"text-white flex flex-col gap-3"}>
                      <span className={"font-bold"}>Социальные сети</span>
                      <div className={"flex gap-2"}>
                          <img src="/telegram-icon.svg" alt="#" className={"w-8 h-8 cursor-pointer"}/>
                          <img src="/instagram-icon.svg" alt="#" className={"w-8 h-8 cursor-pointer"}/>
                          <img src="/youtube-icon.svg" alt="#" className={"w-8 h-8 cursor-pointer"}/>
                      </div>
                  </div>
              </div>

              <div className="container mx-auto flex gap-14 text-xs text-[#DFDFDF]">
                 <span className={"cursor-pointer"}>Публичная оферта</span>
                  <span className={"cursor-pointer"}>Пользовательское соглашение</span>
              </div>
          </footer>
      </div>
  );
}

export default App;
