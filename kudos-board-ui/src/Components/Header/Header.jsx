import './Header.css'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className='header-content'>
            <Link to={`/`} >
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFYklEQVR4nO1ZXUwcVRQeSGvtg0Va2Xvu7AL9oYrIj4oSBPYcqhjRUBKpWAq7SI02UQOammhifTG2/iSa2MYntbYvfeiTta3VmPoXDWIhpcw2aUQfbCI18cVGai1pyZgz7M7OLvPHll0w4UtugHvnnvOdn3vumUFRlrCEJWQFARXbhcRhATQFknQB+Hsg2FSdWAfAN0DiVV6zG7zP2C+oTck1hIqbbUlJ2m0aIPGSE/lZ+3JthJA4Mtujc4sApBp+KrcGxNOGx5o1DTdlImP16rpV1nRScgmr9xaDnDljyYA4liIwH4e4sLClIBMZhYUtBZYKdkXJJfgCci6LeBUA9ymKkh9/PJ//9iipP+XWAEFtnvUdaL+i0DL+6f0sPpJTAxJG8AVkTSebaPzq1kqw5xeEvAvyHT0OHBEzrRY1ZhsB/x/yViP2CsB/+WfWyAOEEYCOAtBEfBzlObc9FRUVNwiJA5y/AugySDzOhzVb+hwBQK+CpGmbfJ0GwF12e4JBCgHQWPqeQACrsqHPEVI2NzoIswhtJuue0lK6EQDP2LTRX3hFQGagzxVG6JK9+GfsWR5C0glLbT5i3RNPG/PmFJL6029hKRtLALC3tJRuvl59rjDyL76RBSXmVTVcbKkcEyl7uGYnSfTPlmpcWhfiZE5erz5XWAWykBQPOhqAk4m1VA/reRHStm8LD5tnIxh8cDpCY328lqk+LwOsIT3BQnkIiZ87hRQk/Z1YKylpKkySj+2PUkzvahoyczoUfEjnuShqH2aqzxVFargBJF5zP1Sp5Q0kDiVJ4ADPsecNohTTqXqfub98Xd+MARTTIxjrzUSfjyjgLqeyFpD4SvrznPfWQxyQ+PzWpsGzXeEhg7yUD5gymmveTxpA2ulM9PmClBgGoE+TFwse4Tm7Z8vKWlfYldH0sXFtRI/QqNWA6R21I8vnqi8rMEof4Kgb+ccbfzDJR41zELtG9I2vmzonMFoJEX4OgAaDass0H1jOeU4bq+ctZ2BkPvXnBSRtE4Dfg8SL9n06XgGgt/wI41KZTtjGgF5+Vkh6x5Btr/Mv5iRU6mKOTvryQeIBrxyeEUj/+POHnhcl7SNn8toHCcfNNH7eugHwY1sjhErbfZK/LCS95thFeuwvDbXrFeufuhiufNf8TjojA990isAsDoL63F/EgfaEQvUr/fjYpYv0Gr67TOYy8y3V5Vspp8Vcv2f66CJ9GNFMc/1Wyre+nSfHrRHw85Zk10V67cmwy8xPiQDguVlPCIkvpeSZpFMA9IwQm+5g6zmM6e2xUxeZQGf94MruJq0wfVSXD1QmDWi+YN3DevjdgnWyboND+ncmwBdtjKRl7EXvKkBvJ42mPxPzRSEqS8z3hs/WRVAbdao+HfedTB7q4s1GO9GDsXsBsMP7ILu+otYuFxJfN162ncvYL6YBgJ9Y1jQ2ohvHqqKkTTmR39LwlV62tsuUV3PrC/E1bao41Hbcu/rVGm2HKwCaijhMbK0AOs8HnI0SEn8LSOxOPKeqeJf1wxX/Xln27ERr7SG9s+E7vQdPp5B/+J7Duqq2mKRU9X790fovk+u1h38UQD8bb3SGTjoPEo8B4E4p6RYlGxBqeKtb2NeVdOhbGr42CN5928vmPHenrbWH0vuiS8pCoCi4qUZI/NbJCKx6zyDYXndMX1/ymF6xYUeK56PJm/kPZSHBKXXnxp3DFRue1kuL2410sUbAx9irLDQ6W0YKohTTfBLWk+mjnempG1+lLAYwkQhpB/llxbMbJW06irEDTzacy+i/mVlFFGO3R0nbE6HYYBS1SYu3J3kuQtruJ0grX2ievtHfOr6Cx3wK/Q8eFf0oXwXwTgAAAABJRU5ErkJggg=="/>
            </Link>
                <h1>KUDOBOARD</h1>
            </div>
        </div>
    )
}

export default Header;