"use client";

import { FC } from "react";
import { Button } from "@/components/common/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/common/carousel";
import { Container } from "@/components/common/container";
import {
  InfoBlock,
  InfoList,
  InfoListItem,
  InfoSeparator,
} from "@/components/jobs/job-info";
import { type Ticket } from "@/helpers/events";
import { useEvent } from "@/hooks/events";
import { creatoDisplay, manRope } from "@/lib/fonts";

export const EventInfo: FC = () => {
  const event = useEvent();
  const facilitatorBgs = ["#FFF8C6", "#FFE0D6", "#FFD7FE"];

  function randomBg() {
    return Math.floor(Math.random() * 3);
  }

  return (
    <section className={"bg-white"}>
      <Container className={"max-w-md lg:max-w-7xl py-8 gap-8"}>
        <InfoBlock title={"About the Event"}>
          <p>{event.data?.description}</p>
        </InfoBlock>
        <InfoSeparator />
        {event.data?.what_to_expect.length ? (
          <>
            <InfoBlock title={"What to Expect"}>
              <InfoList>
                {event.data?.what_to_expect.map((item, index) => (
                  <InfoListItem key={index}>{item}</InfoListItem>
                ))}
              </InfoList>
            </InfoBlock>
            <InfoSeparator />
          </>
        ) : null}
        {event.data?.who_to_expect.length ? (
          <>
            <InfoBlock title={"Who This Event Is For"}>
              <InfoList>
                {event.data?.who_to_expect.map((item, index) => (
                  <InfoListItem key={index}>{item}</InfoListItem>
                ))}
              </InfoList>
            </InfoBlock>
            <InfoSeparator />
          </>
        ) : null}
        {event.data?.facilitators.length ? (
          <>
            <InfoBlock title={"Speakers & Facilitators"}>
              <Carousel className={"w-full"}>
                <CarouselContent className={"gap-4"}>
                  {event.data?.facilitators.map((item, index) => (
                    <CarouselItem
                      key={index}
                      className={"max-w-xs lg:max-w-lg"}
                    >
                      <div
                        style={{
                          backgroundColor: facilitatorBgs[randomBg()],
                        }}
                        className={
                          "w-xs lg:w-lg h-40  rounded-xl border-[#F2F2F2] border-[0.15rem] py-6 px-4 space-y-2"
                        }
                      >
                        <h4
                          className={`${manRope.className} font-medium text-base lg:text-lg`}
                        >
                          {item.name}
                        </h4>
                        <p className={"text-[#696969] text-sm lg:text-base"}>
                          {item.role} / {item.company}
                        </p>
                        <p
                          className={
                            "text-[#4E4E4E] text-xs lg:text-sm w-10/12"
                          }
                        >
                          {item.description}
                        </p>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </InfoBlock>
            <InfoSeparator />
          </>
        ) : null}
        {event.data?.agendas.length ? (
          <>
            <InfoBlock title={"Agenda (If applicable)"}>
              <InfoList>
                <InfoListItem>Welcome & Introduction</InfoListItem>
                <InfoListItem>Main Session / Talk</InfoListItem>
                <InfoListItem>Panel or Discussion</InfoListItem>
                <InfoListItem>Q&A</InfoListItem>
                <InfoListItem>Networking / Close</InfoListItem>
              </InfoList>
            </InfoBlock>
            <InfoSeparator />
          </>
        ) : null}

        <InfoBlock title={"Tickets & Access"}>
          <Carousel className={"w-full"}>
            <CarouselContent className={"gap-5"}>
              {event.data?.tickets.map((ticket) => (
                <Ticket
                  key={ticket.id}
                  bgColor={"#FFD7FE"}
                  mainColor={"#D066CE"}
                  ticket={ticket}
                />
              ))}
            </CarouselContent>
          </Carousel>
          <p
            className={
              "text-[#C2C2C2] font-medium text-xs md:text-sm lg:text-base"
            }
          >
            Limited seats available. Early booking recommended.
          </p>
        </InfoBlock>
        <InfoSeparator />
      </Container>
    </section>
  );
};

type TicketProps = {
  bgColor: string;
  mainColor: string;
  ticket: Ticket;
};
const Ticket: FC<TicketProps> = ({ bgColor, mainColor, ticket }) => {
  return (
    <CarouselItem className={"max-w-[16rem] lg:max-w-md"}>
      <div
        style={{
          backgroundColor: bgColor,
        }}
        className={`relative w-[16rem] lg:w-md space-y-6 h-96 lg:h-136 border-[#F2F2F2] border-[0.15rem] rounded-2xl px-4 md:px-8 py-10`}
      >
        <svg
          width="440"
          height="263"
          viewBox="0 0 440 263"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={"absolute top-0 left-0 w-full h-56"}
        >
          <path
            d="M15.4828 -85.2586V348.259C15.4828 350.312 14.6671 352.281 13.2154 353.733C11.7636 355.184 9.79452 356 7.74138 356C5.68824 356 3.71919 355.184 2.2674 353.733C0.815607 352.281 0 350.312 0 348.259V-85.2586C0 -87.3118 0.815607 -89.2808 2.2674 -90.7326C3.71919 -92.1844 5.68824 -93 7.74138 -93C9.79452 -93 11.7636 -92.1844 13.2154 -90.7326C14.6671 -89.2808 15.4828 -87.3118 15.4828 -85.2586ZM69.6724 -93C67.6193 -93 65.6502 -92.1844 64.1984 -90.7326C62.7466 -89.2808 61.931 -87.3118 61.931 -85.2586V348.259C61.931 350.312 62.7466 352.281 64.1984 353.733C65.6502 355.184 67.6193 356 69.6724 356C71.7256 356 73.6946 355.184 75.1464 353.733C76.5982 352.281 77.4138 350.312 77.4138 348.259V-85.2586C77.4138 -87.3118 76.5982 -89.2808 75.1464 -90.7326C73.6946 -92.1844 71.7256 -93 69.6724 -93ZM131.603 -93C129.55 -93 127.581 -92.1844 126.129 -90.7326C124.678 -89.2808 123.862 -87.3118 123.862 -85.2586V348.259C123.862 350.312 124.678 352.281 126.129 353.733C127.581 355.184 129.55 356 131.603 356C133.657 356 135.626 355.184 137.077 353.733C138.529 352.281 139.345 350.312 139.345 348.259V-85.2586C139.345 -87.3118 138.529 -89.2808 137.077 -90.7326C135.626 -92.1844 133.657 -93 131.603 -93ZM193.534 -93C191.481 -93 189.512 -92.1844 188.061 -90.7326C186.609 -89.2808 185.793 -87.3118 185.793 -85.2586V348.259C185.793 350.312 186.609 352.281 188.061 353.733C189.512 355.184 191.481 356 193.534 356C195.588 356 197.557 355.184 199.008 353.733C200.46 352.281 201.276 350.312 201.276 348.259V-85.2586C201.276 -87.3118 200.46 -89.2808 199.008 -90.7326C197.557 -92.1844 195.588 -93 193.534 -93ZM255.466 -93C253.412 -93 251.443 -92.1844 249.992 -90.7326C248.54 -89.2808 247.724 -87.3118 247.724 -85.2586V348.259C247.724 350.312 248.54 352.281 249.992 353.733C251.443 355.184 253.412 356 255.466 356C257.519 356 259.488 355.184 260.94 353.733C262.391 352.281 263.207 350.312 263.207 348.259V-85.2586C263.207 -87.3118 262.391 -89.2808 260.94 -90.7326C259.488 -92.1844 257.519 -93 255.466 -93ZM317.397 -93C315.343 -93 313.374 -92.1844 311.923 -90.7326C310.471 -89.2808 309.655 -87.3118 309.655 -85.2586V348.259C309.655 350.312 310.471 352.281 311.923 353.733C313.374 355.184 315.343 356 317.397 356C319.45 356 321.419 355.184 322.871 353.733C324.322 352.281 325.138 350.312 325.138 348.259V-85.2586C325.138 -87.3118 324.322 -89.2808 322.871 -90.7326C321.419 -92.1844 319.45 -93 317.397 -93ZM379.328 -93C377.274 -93 375.305 -92.1844 373.854 -90.7326C372.402 -89.2808 371.586 -87.3118 371.586 -85.2586V348.259C371.586 350.312 372.402 352.281 373.854 353.733C375.305 355.184 377.274 356 379.328 356C381.381 356 383.35 355.184 384.802 353.733C386.253 352.281 387.069 350.312 387.069 348.259V-85.2586C387.069 -87.3118 386.253 -89.2808 384.802 -90.7326C383.35 -92.1844 381.381 -93 379.328 -93ZM441.259 -93C439.205 -93 437.236 -92.1844 435.785 -90.7326C434.333 -89.2808 433.517 -87.3118 433.517 -85.2586V348.259C433.517 350.312 434.333 352.281 435.785 353.733C437.236 355.184 439.205 356 441.259 356C443.312 356 445.281 355.184 446.733 353.733C448.184 352.281 449 350.312 449 348.259V-85.2586C449 -87.3118 448.184 -89.2808 446.733 -90.7326C445.281 -92.1844 443.312 -93 441.259 -93Z"
            fill="url(#paint0_linear_421_1009)"
            fillOpacity="0.1"
            style={{
              mixBlendMode: "color-burn",
            }}
          />
          <defs>
            <linearGradient
              id="paint0_linear_421_1009"
              x1="0"
              y1="131.5"
              x2="449"
              y2="131.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#7515FD" />
              <stop offset="0.13" stop-color="#8319E5" />
              <stop offset="0.41" stop-color="#A723A7" />
              <stop offset="0.81" stop-color="#E03245" />
              <stop offset="1" stop-color="#FE3A12" />
            </linearGradient>
          </defs>
        </svg>
        <div>
          <span
            className={"rounded-full bg-white px-3 font-semibold py-2 text-xs"}
          >
            {ticket.name}
          </span>
        </div>
        <h2
          className={`${creatoDisplay.className} text-4xl md:text-2xl lg:text-[5rem] font-medium h-[35%] md:h-1/2 w-10/12`}
        >
          {ticket.name}
        </h2>
        <div className="space-y-3">
          <p className={"font-bold text-[#4E4E4E] text-sm "}>
            What&apos;s included in the ticket:
          </p>
          <div className="flex flex-wrap items-center gap-1 md:gap-3">
            {ticket.features.map((item, index) => (
              <InfoListItem key={index} className={"text-xs text-[#4E4E4E]"}>
                {item}
              </InfoListItem>
            ))}
          </div>
        </div>
        <div
          style={{
            backgroundColor: mainColor,
          }}
          className={`rounded-4xl px-6 py-4 w-full absolute -bottom-4 left-0 h-20 lg:h-32 flex items-center justify-between`}
        >
          <h5
            className={`text-white ${creatoDisplay.className} text-2xl  lg:text-6xl font-medium`}
          >
            $100
          </h5>
          <Button size={"sm"} className={"bg-white text-black px-4"}>
            Buy Ticket
          </Button>
        </div>
      </div>
    </CarouselItem>
  );
};
