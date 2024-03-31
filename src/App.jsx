import Script from "./countdown.jsx";

function App (){

    const targetDate = new Date('2024-04-17 00:00:00')

    return(
        <>
            <Script targetDate={targetDate}></Script>
        </>
    );
}

export default App