import style from "./course.module.css";
import { Exercise } from "../../components/Exercise";
import { Video } from "../../components/Video";
import YoutubeEmbed from "../Course/youtubeEmbed";
import { IconDropdown } from "../../components/Dropdown";
import SectionDownload1 from "../../components/sectionDowload1";
import SectionDownload2 from "../../components/sectionDowload2";
import { TitleMobile, TitlePC } from "../Course/title";
import PostQuestion from "../Course/postQuestion";
import Note from "./note";
import SectionDownload from "../Course/sectionDownload";
import Quiz, { QuizHasNotImg } from "../Course/quiz";
import UseLogic from "../Course/useLogic";
import { dataQuestions } from "../../fakeData/question";
import Search from "../../components/Search";

export default function Course() {
  const {
    handleAnswer,
    answer,
    tab1,
    tab2,
    tougle1,
    tougle2,
    handleSubmit,
    message,
    messages,
  } = UseLogic();

  return (
    <div>
      <TitleMobile />
      <TitlePC />
      <div className={style.screenPC}>
        <div className={style.left}>
          {/* <Section sections={lessons} handleCollaspe={handleCollapse} /> */}
        </div>
        <div className={style.right}>
          <div className={style.part1}>
            <h5>Lession 1: Xin chào, cảm ơn / Hello, Thank kiu</h5>
          </div>
          <div className={style.part2}>
            {tougle1 === 1 ? (
              <div>
                <div className={style.tab}>
                  <div className={style.video} onClick={() => tab1(1)}>
                    <Video />
                    <p>Video</p>
                  </div>
                  <div className={style.exercise} onClick={() => tab1(2)}>
                    <Exercise />
                    <p>Exercise/Quiz</p>
                  </div>
                </div>
                <div>
                  <YoutubeEmbed embedId="jk7LbXUpmz0" />
                </div>
                <div className={style.tabAndSearch}>
                  <div className={style.tab2}>
                    <div
                      className={tougle2 === 1 ? style.active : style.unActive}
                      onClick={() => tab2(1)}
                    >
                      <p>Transcript</p>
                    </div>
                    <div
                      className={tougle2 === 2 ? style.active : style.unActive}
                      onClick={() => tab2(2)}
                    >
                      <p>Q&A</p>
                    </div>
                    <div
                      className={tougle2 === 3 ? style.active : style.unActive}
                      onClick={() => tab2(3)}
                    >
                      <p>Note</p>
                    </div>
                    <div
                      className={tougle2 === 4 ? style.active : style.unActive}
                      onClick={() => tab2(4)}
                    >
                      <p>Download</p>
                    </div>
                  </div>
                  <div className={style.searchAndFilter}>
                    <div className={style.searchAndImg}>
                      <Search />
                      <input type="search" placeholder="Search Here" />
                    </div>
                    <button>
                      All Lectures
                      <IconDropdown />
                    </button>
                  </div>
                </div>
                <div className={tougle2 === 1 ? style.transcript : style.none}>
                  <div className={style.transcriptDetail}>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet odio
                      mattis. Class aptent taciti sociosqu ad litora torquent
                      per conubia nostra, per inceptos himenaeos.
                    </p>
                  </div>
                  <div className={style.transcriptDetail}>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet odio
                      mattis. Class aptent taciti sociosqu ad litora torquent
                      per conubia nostra, per inceptos himenaeos. Curabitur
                      tempus urna at turpis condimentum lobortis. Ut commodo
                      efficitur neque.
                    </p>
                  </div>
                  <div className={style.transcriptDetail}>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                      dignissim, metus nec fringilla accumsan, risus sem
                      sollicitudin lacus, ut interdum tellus elit sed risus.
                      Maecenas eget condimentum velit, sit amet feugiat lectus.
                      Class aptent taciti sociosqu ad litora torquent per
                      conubia nostra, per inceptos himenaeos. Praesent auctor
                      purus luctus enim egestas, ac scelerisque ante pulvinar.
                      Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu
                      tempor urna. Curabitur vel bibendum lorem. Morbi convallis
                      convallis diam sit amet lacinia. Aliquam in elementum
                      tellus.
                    </p>
                  </div>
                  <div className={style.transcriptDetail}>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet odio
                      mattis.
                    </p>
                  </div>
                  <div className={style.transcriptDetail}>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet odio
                      mattis. Class aptent taciti sociosqu ad litora torquent
                      per conubia nostra, per inceptos himenaeos. Curabitur
                      tempus urna at turpis condimentum lobortis. Ut commodo
                      efficitur neque. Ut diam quam, semper iaculis condimentum
                      ac, vestibulum eu nisl.
                    </p>
                  </div>
                  <div className={style.transcriptDetail}>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet odio
                      mattis. Class aptent taciti sociosqu ad litora torquent
                      per conubia nostra, per inceptos himenaeos. Curabitur
                      tempus urna at turpis condimentum lobortis. Ut commodo
                      efficitur neque. Ut diam quam, semper iaculis condimentum
                      ac, vestibulum eu nisl.
                    </p>
                  </div>
                </div>
                {tougle2 === 2 ? (
                  <div className={style.toggle2}>
                    <div className={style.toggle2Detail}>
                      <div className={style.question}>
                        <label>Your Question</label>
                        <textarea rows={4}></textarea>
                      </div>
                      <div className={style.buttonAddQuestion}>
                        <button>Ask Question</button>
                      </div>
                    </div>
                    <div className={style.postQuestion}>
                      <PostQuestion
                        title={"Tùng Nguyễn - Lecture 10 - 1 month ago"}
                        detail={`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.is enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. is enim velit mollit. Exercitation
          veniam consequat n veniam....`}
                      />
                      <PostQuestion
                        title={"Tùng Nguyễn - Lecture 10 - 1 month ago"}
                        detail={`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.is enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. is enim velit mollit. Exercitation
          veniam consequat n veniam....`}
                      />
                      <PostQuestion
                        title={"Tùng Nguyễn - Lecture 10 - 1 month ago"}
                        detail={`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.is enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. is enim velit mollit. Exercitation
          veniam consequat n veniam....`}
                      />
                      <PostQuestion
                        title={"Tùng Nguyễn - Lecture 10 - 1 month ago"}
                        detail={`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.is enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. is enim velit mollit. Exercitation
          veniam consequat n veniam....`}
                      />
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
                {tougle2 === 3 ? (
                  <div>
                    <div className={style.note}>
                      <div className={style.lecture}>
                        <button>
                          All Lectures <IconDropdown />
                        </button>
                      </div>
                      <Note />
                      <Note />
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
                {tougle2 === 4 ? (
                  <div className={style.download}>
                    <div className={style.downloadDetail}>
                      <div className={style.currentLectures}>
                        <button>
                          <h6>
                            Current Lectures
                            <IconDropdown />
                          </h6>
                        </button>
                      </div>
                      <div className={style.sectionDownload}>
                        <h2>Section 1: Xin chào, cảm ơn</h2>
                        <p>10. Tên Lesson 10</p>
                      </div>
                      <div className="attach">
                        <SectionDownload
                          img={<SectionDownload1 />}
                          detail={"Lorem ipsum dolor sit amet consectetur."}
                        />
                        <SectionDownload
                          img={<SectionDownload2 />}
                          detail={"Lorem ipsum dolor sit amet consectetur."}
                        />
                        <SectionDownload
                          img={<SectionDownload1 />}
                          detail={"Lorem ipsum dolor sit amet consectetur."}
                        />
                        <SectionDownload
                          img={<SectionDownload2 />}
                          detail={"Lorem ipsum dolor sit amet consectetur."}
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            ) : (
              <div></div>
            )}
            {tougle1 === 2 ? (
              <div className={style.tab12}>
                <div className={style.tabExercise}>
                  <div
                    className={tougle1 === 1 ? style.video : style.exercise}
                    onClick={() => tab1(1)}
                  >
                    <Video />
                    <p>Video</p>
                  </div>
                  <div
                    className={tougle1 === 2 ? style.video : style.exercise}
                    onClick={() => tab1(2)}
                  >
                    <Exercise />
                    <p>Exercise/Quiz</p>
                  </div>
                </div>
                <div className={style.answerQuestion}>
                  <div className={style.progressBar}>
                    <p>
                      {(
                        (Object.values(answer).length / dataQuestions.length) *
                        100
                      ).toFixed(2)}
                      % complete
                    </p>
                    <progress
                      id={style.myProgress}
                      value={
                        Object.values(answer).length / dataQuestions.length
                      }
                    />
                  </div>
                  <form onSubmit={handleSubmit}>
                    {dataQuestions.map((question) => (
                      <Quiz
                        question={question}
                        index={question.id}
                        questionName={question.questionName}
                        img={question.img}
                        listAnswers={question.answers}
                        handleAnswer={handleAnswer}
                        message={message}
                        messages={messages}
                      />
                    ))}

                    <div className={style.submitQuestion}>
                      <button type="submit">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            ) : (
              <div></div>
            )}
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
