import React from "react";

import Link from "next/link";

import Icon from "./icon";

export default class Header extends React.Component {
  render() {
    const { focus } = this.props;
    return (
      <div className="header">
        <nav className="menu">
          <ul>
            <li className="menuItem">
              <Link href="/index">
                <a id={focus == "home" ? "selectedItem" : ""}>
                  <span className="icon">
                    <Icon
                      path={
                        `M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z`
                      }
                      size="1em"
                    />
                  </span>
                  <span className="menuText">Home</span>
                </a>
              </Link>
            </li>
            <li className="menuItem">
              <Link href="/dev">
                <a id={focus == "dev" ? "selectedItem" : ""}>
                  <span className="icon">
                    <Icon
                      path={
                        `M282.521,137.595h39.674l-90.048,236.811h-39.452L282.521,137.595z M462,272.385L345.031,338.12
                v-40.762l68.109-38.409l-68.109-38.014v-40.867L462,245.805V272.385z M50,245.805l116.97-65.736v40.867L98.86,258.949l68.109,38.409
                v40.762L50,272.385V245.805z`
                      }
                      viewBox="512"
                      size="1.3em"
                    />
                  </span>
                  <span className="menuText">Dev</span>
                  <div className="underline" />
                </a>
              </Link>
            </li>
            <li className="menuItem">
              <Link href="/2d">
                <a id={focus == "2d" ? "selectedItem" : ""}>
                  <span className="icon">
                    <Icon
                      path={
                        `M16.84,2.73C16.45,2.73 16.07,2.88 15.77,3.17L13.65,5.29L18.95,10.6L21.07,8.5C21.67,7.89 21.67,6.94 
                21.07,6.36L17.9,3.17C17.6,2.88 17.22,2.73 16.84,2.73M12.94,6L4.84,14.11L7.4,14.39L7.58,16.68L9.86,16.85L
                10.15,19.41L18.25,11.3M4.25,15.04L2.5,21.73L9.2,19.94L8.96,17.78L6.65,17.61L6.47,15.29`
                      }
                      size="1em"
                    />
                  </span>
                  <span className="menuText">2D</span>
                </a>
              </Link>
            </li>
            <li className="menuItem">
              <Link href="/3d">
                <a id={focus == "3d" ? "selectedItem" : ""}>
                  <span className="icon">
                    <Icon
                      path={
                        `M16.39 22.994c-.452.115-.76-.197-.92-.586-.293-.71-.588-1.422-.867-2.14-.033-.086-.044-.092-.12-.106-2.24-.443
                -4.51-1.05-6.94-1.852-.114-.038-.073-.1-.246.045-.79.66-1.59 1.312-2.398 1.95-.206.16-.44.347-.738.347-.14 0-.345-.042-.543
                -.243-.484-.492-.073-.994.082-1.183.7-.88 1.364-1.697 2.036-2.507l.028-.143c-.772-2.406-1.288-4.365-1.824-6.74-.053-.228
                -.097-.29-.313-.362-.62-.208-2-.803-2-.803-.196-.085-.792-.342-.604-.99.06-.202.235-.543.75-.545 0 0 1.915.234 
                2.39.32.12.022.19.07.382-.15 1.642-1.88 3.462-3.686 5.41-5.37.447-.387 1.052-.503 1.747-.335 1.846.45 6.583 1.71 7.106 
                1.89.103.018.14.02.24-.066.687-.584 2.597-2.144 2.597-2.144.107-.09.333-.275.618-.275.13 0 .322.04.51.224.225.225.402.608
                -.038 1.16 0 0-1.488 1.848-2.07 2.53-.116.14-.125.197-.072.367.733 2.35 1.25 4.335 1.745 6.538.086.385.113.753.11 1.09
                -.008.514-.18.975-.51 1.374-1.37 1.643-2.993 3.272-5.104 5.13-.176.155-.207.243-.165.47.098.522.294 2.122.294 2.122-.002.5
                -.114.863-.573.982zM5.777 9.952c-.028.037-.046.123-.01.254.388 1.468 1.526 5.55 1.526 5.55.13.47.436.787.91.94 1.218.395 
                2.44.775 3.67 1.132.66.19 1.332.345 1.99.46.083.016.177.026.22-.016.028-.03.06-.118.058-.275l-.33-1.25c-.426-1.53-.853
                -3.056-1.295-4.58-.087-.298-.308-.512-.623-.602-1.947-.555-3.892-1.11-5.847-1.64-.05-.012-.24-.01-.27.027zM19.13 6.324c
                -.06 0-.145.048-.225.127-1.376 1.373-2.73 2.765-4.084 4.158-.255.262-.348.545-.348.966 0 0 1.127 4.825 1.422 
                5.79.047.152.13.316.22.316.03 0 .143-.013.34-.176.16-.135 2.946-2.992 4.093-4.192.17-.176.35-.468.252-.863-.485-1.964
                -.976-3.928-1.493-5.884-.03-.112-.093-.242-.178-.242zm-7.68-3.11c-.286 0-.54.105-.75.312 0 0-2.952 2.865-4.168 4.075
                -.196.194-.22.312-.212.34.007.03.084.123.35.202 1.16.343 5.626 1.458 5.626 1.458.64-.01.99-.25 1.234-.484 1.313-1.264 
                2.63-2.53 3.922-3.82.183-.182.246-.332.228-.4-.018-.065-.143-.16-.382-.224-1.828-.492-5.738-1.458-5.847-1.458z`
                      }
                      size="1em"
                    />
                  </span>
                  <span className="menuText">3D</span>
                </a>
              </Link>
            </li>
            <li className="menuItem">
              <a href="/index#contact">
                <span className="icon">
                  <Icon
                    path={
                      `M23.55 12.2c0 .55-.13 1.25-.22 1.63-.25.98-.72 1.83-1.4 2.6-.74.84-1.66 1.44-2.74 1.8-.7.23-1.4.32-2.13.32h-9.9c
                -.14 0-.3.04-.42.1L2.57 20.6l-2.12.97V11c0-.05 0-.6.03-1.33.1-.97.4-1.88.92-2.7.6-.98 1.4-1.74 2.4-2.28.95-.53 1.98-.77 
                3.07-.77H17.1c.47 0 .94.04 1.4.13 1.17.25 2.22.8 3.1 1.64.85.83 1.45 1.83 1.74 3 .1.36.2 1.1.2 2v1.5zM5.75 17.1c.43-.2.85
                -.32 1.33-.32 3.14.02 6.7.02 9.84 0 1.6 0 2.9-.62 3.88-1.87.54-.7.86-1.47.9-2.33.05-.86.06-1.73 0-2.6-.06-1.3-.66-2.36
                -1.67-3.2-.9-.75-2-1.08-3.18-1.08H7.2c-.3 0-.6.02-.92.07-1.66.27-2.84 1.17-3.57 2.65-.3.65-.42 1.34-.42 2.05v8.25m14.67-8.64c
                -.78 0-1.4.64-1.4 1.4 0 .78.63 1.4 1.4 1.4.76 0 1.38-.63 1.4-1.4 0-.75-.64-1.38-1.4-1.4zm-11.3 1.37c0 .77.6 1.4 1.4 1.43.74.02 
                1.38-.6 1.4-1.37.03-.76-.6-1.4-1.36-1.42-.77 0-1.42.6-1.44 1.37zM12 12.9c.77 0 1.4-.63 1.4-1.4-.02-.78-.65-1.4-1.4-1.4-.78.02
                -1.4.64-1.4 1.4 0 .78.63 1.4 1.4 1.4z`
                    }
                    size="1em"
                  />
                </span>
                <span className="menuText">Contact</span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="offset" />
        <style jsx>
          {
            `
            .menu {
                position: fixed;
                z-index: 999;
                width: 100%;
                background: #bbb;
                font-family: 'open sans';
                box-shadow: 0 1px 0 rgba(0,0,0,.15);
            }

            .offset {
              margin-bottom: 45px;
            }

            .menu ul {
                display: flex;
                justify-content: center;
            }

            .menuItem {
                text-transform: uppercase;
            }

            .menuItem a {
                display: flex;
                height: 45px;
                padding: 10px;
                align-items: center;
                font-size: 1.2em;
                color: black;
                text-decoration: none;
            }

            .icon {
              display: flex;
            }

            .menuItem:hover a {
                background: #bbb;
            }
            

            .menuItem:hover .icon {
                transform: translateY(-5px);
            }

            .menuItem .icon, .menuItem a {
                transition: all .1s ease-in-out;  
            } 

            .menuText {
              margin-left: 3px;
            }

            #selectedItem {
              background: #d92020;
              color: white;
            }
        `
          }
        </style>
      </div>
    );
  }
}
