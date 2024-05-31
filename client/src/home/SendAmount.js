import React, { useState, useContext } from "react";
import axios from "axios";
import { Data } from "../Context";
import "../page.css";
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";

export default function SendAmount() {
  const location = useLocation();

  const [loading, setloading] = useState(false);
  const { ammount, setammount, useracc_no, setuser_acc_no } = useContext(Data);

  const navigate = useNavigate();
  const [accno, setaccno] = useState("");
  const check_fields = ammount && accno;

  const data = location.state.data;
  console.log(data);
  const changedata = async (e) => {
    //e.preventDefault()
    setloading(true);
    await axios
      .put(`http://localhost:3001/change/${accno}`, { ammount, useracc_no })
      .then((res) => {
        if (res.data === "no_balance") {
          console.log("no balance");
          setloading(false);
        } else {
          console.log("transection completed");
        }
      })
      .catch((err) => console.log(err));

    await axios
      .put(`http://localhost:3001/update_amount`, { ammount, useracc_no })
      .then((res) => {
        console.log(res);
        setloading(false);
      })
      .catch((err) => console.log(err));
  };

  console.log(ammount);

  const data_transfer = (e) => {
    let current_user_accno = e.user.account_number;

    navigate("/Amount", { state: { data: current_user_accno } });
  };
  return (
    <div>
      {data.map((e) => {
        return (
          <div>
            <nav class="navbar navbar-expand-lg navbar-white bg-white">
              <div class="container-fluid">
                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <a class="navbar-brand mt-2 mt-lg-0" href="#">
                    <img
                      src="https://www.freeiconspng.com/thumbs/payment-icon/cash-payment-icon-5.png"
                      height="55"
                      alt="MDB Logo"
                      loading="lazy"
                    />
                  </a>

                  <ul class="navbar-nav me-auto  ">
                    <li class="nav-item">
                      <a class="nav-link">Name: {e.user.name}</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link">Email:{e.user.email}</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link">
                        Account Number: {e.user.account_number}
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="d-flex align-items-center">
                  <a class="text-reset me-3">
                    <i class="fas fa-shopping-cart"></i>
                  </a>

                  <div class="dropdown">
                    <a
                      class="dropdown-toggle d-flex align-items-center hidden-arrow"
                      id="navbarDropdownMenuAvatar"
                      role="button"
                      data-mdb-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src={e.user.pic}
                        class="rounded-circle"
                        height="50"
                        alt="Black and White Portrait of a Man"
                        loading="lazy"
                      />
                    </a>
                    <ul
                      class="dropdown-menu dropdown-menu-end"
                      aria-labelledby="navbarDropdownMenuAvatar"
                    ></ul>
                  </div>
                </div>
              </div>
            </nav>

            <div class="container-fluid px-0" id="bg-div">
              <div class="row justify-content-center">
                <div class="col-lg-9 col-12">
                  <div class="card card0">
                    <div class="d-flex" id="wrapper">
                      <div class="bg-light border-right" id="sidebar-wrapper">
                        <div class="sidebar-heading pt-5 pb-4">
                          <strong>PAY WITH</strong>
                        </div>
                        <div class="list-group list-group-flush">
                          {" "}
                          <a
                            data-toggle="tab"
                            href="#menu1"
                            id="tab1"
                            class="tabs list-group-item bg-light"
                          >
                            <div class="list-div my-2">
                              <div class="fa fa-home"></div> &nbsp;&nbsp; Bank
                            </div>
                          </a>{" "}
                          <a
                            data-toggle="tab"
                            href="#menu2"
                            id="tab2"
                            class="tabs list-group-item active1"
                          >
                            <div class="list-div my-2">
                              <div class="fa fa-credit-card"></div> &nbsp;&nbsp;
                              Card
                            </div>
                          </a>{" "}
                          <a
                            data-toggle="tab"
                            href="#menu3"
                            id="tab3"
                            class="tabs list-group-item bg-light"
                          ></a>{" "}
                        </div>
                      </div>
                      <div id="page-content-wrapper">
                        <div class="row pt-3" id="border-btm">
                          <div class="col-4">
                            {" "}
                            <button
                              class="btn btn-success mt-4 ml-3 mb-3"
                              id="menu-toggle"
                            >
                              <div class="bar4"></div>
                              <div class="bar4"></div>
                              <div class="bar4"></div>
                            </button>{" "}
                          </div>
                          <div class="col-8">
                            <div class="row justify-content-right">
                              <div class="col-12">
                                <p class="mb-0 mr-4 mt-4 text-right">
                                  {e.user.email}
                                </p>
                              </div>
                            </div>
                            <div class="row justify-content-right">
                              <div class="col-12">
                                <p class="mb-0 mr-4 text-right">
                                  Pay{" "}
                                  <span class="top-highlight">{ammount}</span>{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row justify-content-center">
                          <div class="text-center" id="test">
                            Pay
                          </div>
                        </div>
                        <div class="tab-content">
                          <div id="menu1" class="tab-pane">
                            <div class="row justify-content-center">
                              <div class="col-11">
                                <div class="form-card">
                                  <h3 class="mt-0 mb-4 text-center">
                                    Enter bank details to pay
                                  </h3>
                                  <form onsubmit="event.preventDefault()">
                                    <div class="row">
                                      <div class="col-12">
                                        <div class="input-group">
                                          {" "}
                                          <input
                                            type="text"
                                            id="bk_nm"
                                            placeholder="BBB Bank"
                                          />{" "}
                                          <label>BANK NAME</label>{" "}
                                        </div>
                                      </div>
                                    </div>
                                    <div class="row"></div>
                                    <div class="row">
                                      <div class="col-md-12">
                                        {" "}
                                        <input
                                          type="submit"
                                          value="Pay $ 100"
                                          class="btn btn-success placeicon"
                                        />{" "}
                                      </div>
                                    </div>
                                    <div class="row">
                                      <div class="col-md-12">
                                        <p
                                          class="text-center mb-5"
                                          id="below-btn"
                                        >
                                          <a>Use a test card</a>
                                        </p>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id="menu2" class="tab-pane in active">
                            <div class="row justify-content-center">
                              <div class="col-11">
                                <div class="form-card">
                                  <h3 class="mt-0 mb-4 text-center">
                                    Enter your card details to pay
                                  </h3>
                                  <form onsubmit="event.preventDefault()">
                                    <div class="row">
                                      <div class="col-12">
                                        <div class="input-group">
                                          {" "}
                                          <input
                                            type="text"
                                            id="cr_no"
                                            placeholder="0000 0000 0000 0000"
                                            minlength="19"
                                            maxlength="19"
                                            value={useracc_no}
                                            onChange={(e) => {
                                              setuser_acc_no(e.target.value);
                                            }}
                                          />{" "}
                                          <label>YOUR ACCOUNT NUMBER</label>{" "}
                                        </div>
                                      </div>
                                    </div>
                                    <div class="row">
                                      <div class="col-12">
                                        <div class="input-group">
                                          {" "}
                                          <input
                                            type="text"
                                            id="cr_no"
                                            placeholder="0000 0000 0000 0000"
                                            minlength="19"
                                            maxlength="19"
                                            value={accno}
                                            onChange={(e) => {
                                              setaccno(e.target.value);
                                            }}
                                          />{" "}
                                          <label>
                                            RECIEVERS ACCOUNT NUMBER
                                          </label>{" "}
                                        </div>
                                      </div>
                                    </div>

                                    <div class="row">
                                      <div class="col-6">
                                        <div class="input-group">
                                          {" "}
                                          <input
                                            type="text"
                                            name="exp"
                                            id="exp"
                                            placeholder="MM/YY"
                                            minlength="5"
                                            maxlength="5"
                                          />{" "}
                                          <label>CARD EXPIRY</label>{" "}
                                        </div>
                                      </div>
                                      <div class="col-6">
                                        <div class="input-group">
                                          {" "}
                                          <input
                                            name="cvcpwd"
                                            class="placeicon"
                                            value={ammount}
                                            onChange={(e) => {
                                              setammount(e.target.value);
                                            }}
                                          />{" "}
                                          <label>AMOUNT</label>{" "}
                                        </div>
                                      </div>
                                    </div>
                                    <div class="row">
                                      <button
                                        type="button"
                                        class="btn btn-outline-primary"
                                        onClick={() => {
                                          changedata(e);
                                        }}
                                        disabled={!check_fields}
                                      >
                                        Send Amount
                                      </button>
                                      <button
                                        type="button"
                                        class="btn btn-outline-primary"
                                        onClick={() => {
                                          data_transfer(e);
                                        }}
                                      >
                                        View Amount
                                      </button>
                                    </div>
                                    <div class="row">
                                      <div class="col-md-12">
                                        <p
                                          class="text-center mb-5"
                                          id="below-btn"
                                        >
                                          {loading ? (
                                            <ClipLoader
                                              color={"#F37A24"}
                                              loading={loading}
                                              size={70}
                                              aria-label="Loading Spinner"
                                              data-testid="loader"
                                            />
                                          ) : (
                                            <div></div>
                                          )}
                                        </p>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id="menu3" class="tab-pane">
                            <div class="row justify-content-center">
                              <div class="col-11">
                              
                                <div class="row justify-content-center">
                                  <div id="qr">
                                    {" "}
                                    <img
                                      src="https://i.imgur.com/DD4Npfw.jpg"
                                      width="200px"
                                      height="200px"
                                    />{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
