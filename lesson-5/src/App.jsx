import { Button } from "./components";
import { useState } from "react";
import styles from "./App.module.css";

const App = () => {
    const takeOutValues = [10, 20, 50, 100];
    const putInValues = [10, 20, 50, 100];

    const [balance, setBalance] = useState(500);
    const [errorMessage, setErrorMessage] = useState(null);

    const isEnoughBalance = (value = balance) => {
        if (balance >= value && balance !== 0) {
            return true;
        }

        setErrorMessage("Šiai operacijai atlikti trūksta lėšų!");

        return false;
    };

    const handleTakeOut = (value) => {
        setErrorMessage(null);

        return isEnoughBalance(value) && setBalance(balance - value);
    };

    const handlePutIn = (value) => {
        setErrorMessage(null);

        setBalance(balance + value);
    };

    const handleTakeOutAll = () => {
        setErrorMessage(null);

        return isEnoughBalance() && setBalance(0);
    };

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.balanceBlock}>
                    <span>Balansas:</span>
                    <span className={styles.balance}>{balance} €</span>
                </div>
                <div className={styles.actionsBlock}>
                    <div className={styles.actionsWrapper}>
                        {takeOutValues.map((value) => (
                            <Button
                                bgColor="#ffc89b"
                                onClick={() => handleTakeOut(value)}
                                key={value}
                            >
                                Išsiimti {value} €
                            </Button>
                        ))}
                    </div>
                    <div className={styles.actionsWrapper}>
                        {putInValues.map((value) => (
                            <Button
                                bgColor="#b5ff9b"
                                onClick={() => handlePutIn(value)}
                                key={value}
                            >
                                Padėti {value} €
                            </Button>
                        ))}
                    </div>
                    <div className={styles.actionsWrapper}>
                        <Button bgColor="#ff9b9b" onClick={handleTakeOutAll}>
                            Išsiimti viską
                        </Button>
                    </div>
                </div>
            </div>
            {errorMessage && (
                <span className={styles.errorMessage}>{errorMessage}</span>
            )}
        </>
    );
};

export default App;
