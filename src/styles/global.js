import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{


}
:root{
    --green: #B6E2D3;
    --teal: #008080;
    --black: #2F4F4F;
    --darkgrey:#212529;
    --greycolor:#343B41;
    --grey: #212529;
    --lightgrey: #868E96;
    --white:#F8F9FA;
    
    --red:#E83F5B;
}
body{
    background: var(--black);
    font-family: 'Inter', sans-serif;
    background:  var(--black);
    color:var(--white);
}`;
