import Nabvar from '../components/navbar';
import ButtonSave from '../components/buttonSave';
import MessageInfo from '../components/messageInfo';

export default function IncomeSurvey(){
    return (
        <>
            {/*<Nabvar />*/}
            <div className="title-main-quizz block">
                <p className="title is-2">Encuesta de ingreso al programa de estudios de ingeniería en software</p>
            </div>
            <MessageInfo />

            {/* Módulo de encuesta*/}
            <form className="quizz-main m-auto" action="/save" method="POST">
                <div className="field is-horizontal box">
                    <div className="field-is is-normal">
                        <label name="question_id" className="label">Escuela de procedencia: <span className="span-req">*</span></label>
                    </div>
                    <div className="field-body block">
                        <div className="field">
                            <p className="control">
                                <input name="answer" className="input is-purple" type="text" placeholder="respuesta" />
                            </p>
                        </div>
                    </div>
                    <div className="field-is is-normal">
                        <label name="question_id" className="label">Especialidad cursada en tu escuela de procedencia: <span
                            className="span-req">*</span></label>
                    </div>
                    <div className="field-body block">
                        <div className="field">
                            <p className="control">
                                <input name="answer" className="input is-purple" type="text" placeholder="respuesta" />
                            </p>
                        </div>
                    </div>
                    {/* Módulo checkradio*/}
                    <div className="block">
                        <label name="question_id" className="label">¿Cómo te enteraste de la Universidad Politécnica de Durango?</label>
                        <div className="section-check">
                            <div className="control">
                                <label className="radio">
                                    <input name="answer" type="radio" value="paginas" />
                                    Páginas Web
                                </label>
                            </div>
                            <div className="control">
                                <label className="radio">
                                    <input name="answer" type="radio" />
                                    Redes Sociales
                                </label>
                            </div>
                            <div className="control">
                                <label className="radio">
                                    <input name="answer" type="radio" />
                                    Medios de comunicación (televisión, radio, periódico, otro)
                                </label>
                            </div>
                            <div className="control">
                                <label className="radio">
                                    <input name="answer" type="radio" />
                                    Visita guiada programada por mi bachillerato
                                </label>
                            </div>
                            <div className="control">
                                <label className="radio">
                                    <input name="answer" type="radio" />
                                    Pendones
                                </label>
                            </div>
                            <div className="control">
                                <label className="radio">
                                    <input name="answer" type="radio" />
                                    Recomendación de alguien más
                                </label>
                            </div>
                        </div>
                        <div className="control ">
                            <div className="field-is is-normal">
                                <label className="label">Otro:</label>
                            </div>
                            <div className="field-body">
                                <div className="field">
                                    <p className="control">
                                        <input name="answer" className="input is-purple" type="text" placeholder="respuesta" />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Módulo checkbox*/}
                    <div className="block">
                        <label name="question_id" className="label">¿Qué te motiva a estudiar Ingeniería en Software?</label>
                        <div className="section-check">
                            <label className="checkbox">
                                <input name="answer_c" type="checkbox" />
                                Diseñar y desarrollar software a la medida y/o genérico de calidad.
                            </label>
                        </div>
                        <div className="section-check">
                            <label className="checkbox">
                                <input name="answer_c" type="checkbox" />
                                Diseñar y crear bases de datos y aplicaciones para su manipulación.
                            </label>
                        </div>
                        <div className="section-check">
                            <label className="checkbox">
                                <input name="answer_c" type="checkbox" />
                                Gestionar, administrar e implementar proyectos de innovación en el área de software.
                            </label>
                        </div>
                        <div className="section-check">
                            <label className="checkbox">
                                <input name="answer_c" type="checkbox" />
                                Proporcionar soporte técnico y estratégico a la infraestructura de tecnologías de información.
                            </label>
                        </div>
                        <div className="section-check">
                            <label className="checkbox">
                                <input name="answer_c" type="checkbox" />
                                Integrar nuevas soluciones de software a servicios modernos como el comercio electrónico.
                            </label>
                        </div>
                        <div className="section-check">
                            <label className="checkbox">
                                <input name="answer_c" type="checkbox" />
                                Desarrollar investigación en el campo del desarrollo y reingeniería de las tecnologías de la
                                información.
                            </label>
                        </div>
                        <div className="control ">
                            <div className="field-is is-normal">
                                <label name="question_id" className="label">Otro:</label>
                            </div>
                            <div className="field-body">
                                <div className="field">
                                    <p className="control">
                                        <input name="answer" className="input is-purple" type="text" placeholder="respuesta" />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Botón de guardar encuesta*/}

                <ButtonSave />
            </form>
        </>
    );
}
