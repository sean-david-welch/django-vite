import {
    faShieldVirus,
    faAtom,
    faFire,
    faHammer,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function BenefitsHome() {
    return (
        <div className="benefits-home">
            <div className="benefits-home-title">
                <h2>Benefits of Consistent Supplementation:</h2>
            </div>
            <ul className="benefits-list">
                <li className="benefits-list-item">
                    <FontAwesomeIcon icon={faShieldVirus} />
                    <h2>Increased Immune Function</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Dicta veniam molestias quia laborum! Soluta ad non
                        dolore sit officiis nostrum!
                    </p>
                </li>
                <li className="benefits-list-item">
                    <FontAwesomeIcon icon={faFire} />
                    <h2>Increased Energy Levels</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Dicta veniam molestias quia laborum! Soluta ad non
                        dolore sit officiis nostrum!
                    </p>
                </li>
                <li className="benefits-list-item">
                    <FontAwesomeIcon icon={faAtom} />
                    <h2>Helps Autoimmune Conditions</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Dicta veniam molestias quia laborum! Soluta ad non
                        dolore sit officiis nostrum!
                    </p>
                </li>
                <li className="benefits-list-item">
                    <FontAwesomeIcon icon={faHammer} />
                    <h2>Faster Recovery</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Dicta veniam molestias quia laborum! Soluta ad non
                        dolore sit officiis nostrum!
                    </p>
                </li>
            </ul>
        </div>
    );
}

export default BenefitsHome;
