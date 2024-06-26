import { MdArrowOutward, MdOutlineBusinessCenter } from "react-icons/md"
import { VscLaw } from "react-icons/vsc"
import { LiaGavelSolid, LiaFileContractSolid, LiaBriefcaseMedicalSolid } from "react-icons/lia"
import { FiBook } from "react-icons/fi"
import { IoHomeOutline } from "react-icons/io5"
import "./Services.css"

function Services() {
    return (
        <div className="services-wrapper">
            <p className="badge color-primary">Services</p>
            <h1 className="heading font-title">What we do</h1>
            <p className="description color-mute">Our lawyers are specialists in criminal law, civil law, commercial law, administrative law and
                new technologies. We are not afraid of challenges, including consumer bankruptcy.</p>
            <div className="services-grid">
                <div className="service">
                    <div className="top">
                        <div className="icon">
                            <VscLaw size={32} />
                        </div>
                    </div>
                    <div className="bottom">
                        <p className="title">Law <br /> Family</p>
                        <div className="icon">
                            <MdArrowOutward size={32} />
                        </div>
                    </div>
                </div>
                <div className="service">
                    <div className="top">
                        <div className="icon">
                            <LiaGavelSolid size={32} />
                        </div>
                    </div>
                    <div className="bottom">
                        <p className="title">Law <br /> Criminal</p>
                        <div className="icon">
                            <MdArrowOutward size={32} />
                        </div>
                    </div>
                </div>
                <div className="service">
                    <div className="top">
                        <div className="icon">
                            <FiBook size={32} />
                        </div>
                    </div>
                    <div className="bottom">
                        <p className="title">Law <br /> Civil</p>
                        <div className="icon">
                            <MdArrowOutward size={32} />
                        </div>
                    </div>
                </div>
                <div className="service">
                    <div className="top">
                        <div className="icon">
                            <MdOutlineBusinessCenter size={32} />
                        </div>
                    </div>
                    <div className="bottom">
                        <p className="title">Law <br /> Employment</p>
                        <div className="icon">
                            <MdArrowOutward size={32} />
                        </div>
                    </div>
                </div>

                <div className="service">
                    <div className="top">
                        <div className="icon">
                            <IoHomeOutline size={32} />
                        </div>
                    </div>
                    <div className="bottom">
                        <p className="title">Law <br /> Real Estate</p>
                        <div className="icon">
                            <MdArrowOutward size={32} />
                        </div>
                    </div>
                </div>
                <div className="service">
                    <div className="top">
                        <div className="icon">
                            <LiaFileContractSolid size={32} />
                        </div>
                    </div>
                    <div className="bottom">
                        <p className="title">Contracts <br /> Agreements</p>
                        <div className="icon">
                            <MdArrowOutward size={32} />
                        </div>
                    </div>
                </div>
                <div className="service">
                    <div className="top">
                        <div className="icon">
                            <FiBook size={32} />
                        </div>
                    </div>
                    <div className="bottom">
                        <p className="title">Law <br /> Commercial</p>
                        <div className="icon">
                            <MdArrowOutward size={32} />
                        </div>
                    </div>
                </div>
                <div className="service">
                    <div className="top">
                        <div className="icon">
                            <LiaBriefcaseMedicalSolid size={32} />
                        </div>
                    </div>
                    <div className="bottom">
                        <p className="title">Medical <br /> Negligence</p>
                        <div className="icon">
                            <MdArrowOutward size={32} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services