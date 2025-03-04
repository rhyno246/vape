import React, { useEffect, useState } from 'react'
import styled from  '../styles/page/qr.module.scss';
import QRCode from "react-qr-code";

export default function qr() {
    const [time, setTime] = React.useState(30 * 60);
    const [copied, setCopied] = useState(false);
    useEffect(() => {
        if(time < 0) return;
        const interval = setInterval(() => {
            setTime(time => time - 1);
        }, 1000);
        return () => clearInterval(interval);
    },[time] );
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    const handleCopy = (value) => {
        navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };
    
  return (
    <div className={styled.rcdQrcode}>
        <div className={styled.boxRcd}>
            <div className={styled.logoRcd}>
                <img src="/logo.svg" alt="logo" className='img-res'/>
            </div>
            <div className={styled.paymentId}>
                Payment ID: <span>5679593202</span>
            </div>
            <div className={styled.groupQr}>
                <div className={styled.qrCode}>
                    <QRCode
                        size={256}
                        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                        value="10"
                        viewBox={`0 0 256 256`}
                    />
                    <img src="/btc.svg" alt="logo" className='img-res'/>
                </div>
                <div className={styled.mainQr}>
                    <div className={styled.amount}>
                        <p>Amount</p>
                        <div>0.01169057 <span>BTC</span> <span onClick={() => handleCopy('cc')}>copy</span></div>
                    </div>
                    <div className={styled.address}>
                        <p>Address</p>
                        <div>3Ga1iwCifocfuoCa53xVYEBWTGSVBbFRmu <span onClick={() => handleCopy('cl')}>copy</span></div>
                    </div>
                    <div className={styled.time}>
                        <img src="/clock.svg" alt="logo" className='img-res'/>
                        <p className={styled.timeDown}>
                            {formatTime(time)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
