import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export const ElasticSearch = () => {
    return(
        <WrapperElasticSearch>
            <ul id="growing-search-freebie">
                <li>
                    <div className="growing-search">
                        <div className="input">
                            <input type="text" placeholder="Type your search" name="search"/>
                        </div>
                        <div className="submit">
                            <button type="submit" name="go_search">
                            <span className="fa fa-search"></span>
                            <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </div>
                    </div>
                </li>
            </ul>
        </WrapperElasticSearch>
    )
}


const WrapperElasticSearch = styled.div`	

margin: 0; font-family: Arial; background-color: #3498db;
center > h4 { color: #00a0d1; margin-top: 50px; }
ul#growing-search-freebie { display: table; list-style: none; margin: 150px auto 0 auto; padding: 0; }
ul#growing-search-freebie > li { float: left; margin-right: 20px; margin-bottom: 20px; padding: 10px 10px; }
ul#growing-search-freebie > li:last-child { margin-right: 0; }
ul#growing-search-freebie > li > span { margin-bottom: 10px; }


.growing-search {
padding: 5px 5px 5px 7px;
border-radius: 5px;
background: #fff;
}

.growing-search div {
display: inline-block;
font-size: 12px;
}
.growing-search .input {
z-index:2;
}

.growing-search .input input {
margin-right: 0;
border: none;
font-size: inherit;
transition: width 200ms;
padding-top: 5px;
padding-left: 5px;
padding-bottom: 5px;
width: 5px;
color: #aaa;
border-bottom: 1px solid #eee;
background-color: transparent;

    &:hover {
        border-color: transparent;
    }

    &:focus {
        border-color: darkgray;
    }

    &::placeholder {
        color: transparent;
    }

    &:focus::placeholder {
        color: gray;
    }
}

.growing-search .input input:focus {
width: 150px;
}
.growing-search .submit {
    z-index:1;
}
.growing-search .submit button {
margin-left: 0;
border: none;
font-size: 1.15em;
color: #aaa;
background-color: #fff;
padding-top: 2px;
padding-bottom: 2px;
transition: color 200ms;

}

.growing-search .input input:hover, .growing-search .submit button:hover {
cursor: pointer;
}

.growing-search .input input:focus, .growing-search .submit button:focus {
outline: none;
}

.growing-search .submit button:hover {
color: #3498db;
}

`