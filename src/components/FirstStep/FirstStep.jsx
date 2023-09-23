import cn from "classnames"
import React, { useState } from 'react'
import { Form, Input, Typography, Label, Modal, CarouselIndicators, Button } from '@goorm-dev/gds-challenge';
import styles from '../Header/Header.module.scss';

function FirstStep() {
  const [emailValid, setEmailValid] = useState(-1)
  const [name, setName] = useState("")
  const [tel, setTel] = useState("")
  const [email, setEmail] = useState("")
  const [marketing, setMarketing] = useState(true)
  const [pr, setPrivate] = useState(true)
  const [sms, setSMS] = useState(true)
  const [emailAd, setEmailAd] = useState(true)

  const nameHandler = (e) => {
    setName(e.target.value)
    localStorage.setItem("first", JSON.stringify({ name: e.target.value }))
  }

  const emailHandler = (e) => {
    setEmail(e.target.value)
    const emailReg = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/

    if (emailReg.test(e.target.value)) {
      setEmailValid(1)
    }
    else if (e.target.value == "") {
      setEmailValid(-1)
    }
    else {
      setEmailValid(0)
    }
  }

  const allCheckHandler = () => {
    if (!pr && !sms && !emailAd && !marketing) {
      setMarketing(true)
      setPrivate(true)
      setSMS(true)
      setEmailAd(true)
    }
    else {
      setMarketing(false)
      setPrivate(false)
      setSMS(false)
      setEmailAd(false)
    }

    const smsHandler = () => {
      setSMS(!sms);
    };
    const emailAdHandler = () => {
      setEmailAd(!emailAd);
    };
    return (
      <>
        <Typography token="h4">참여자 정보를 입력해주세요.</Typography>
        <Form.Group>
          <Typography token="paragraph-sm">
            오프라인 팀 챌린지 참여자의 정보를 수집하려고 해요.
          </Typography>
        </Form.Group>
        <Form.Group>
          <Label required pointer={false}>
            이름
          </Label>
          <Input
            size="md"
            type="text"
            block
            invalid={false}
            placeholder="이름을 입력해주세요."
          />
        </Form.Group>
        <Form.Group>
          <Label required pointer={false}>
            전화번호
          </Label>
          <Input
            size="md"
            type="tel"
            block
            invalid={false}
            placeholder="ex. 01012345678"
          />
        </Form.Group>
        <Form.Group>
          <Label required pointer={false}>
            이메일
          </Label>
          <Input
            size="md"
            type="email"
            block
            invalid={false}
            placeholder="ex. goormee@goorm.io"
          />
        </Form.Group>

        <Form.Group>
          <Input
            type="checkbox"
            label="전체 동의"
            checked={pr && sms && emailAd && marketing ? true : false}
            onChange={allCheckHandler}
          />
          <div
            style={{
              height: '1px',
              backgroundColor: '#E1E1E8',
              margin: '5px 0',
            }}
            checked={true}
          />
          <div style={{ margin: '5px 0' }}>
            <Input
              type="checkbox"
              label="(필수) 개인정보처리방침"
              checked={pr}
              onChange={prHandler}
            />
          </div>
          <div style={{ margin: '5px 0' }}>
            <Input
              type="checkbox"
              label="(선택) 마케팅 목적의 개인 정보 수집 및 이용"
              checked={marketing}
              onChange={mkHandler}
            />
          </div>
          <div style={{ margin: '5px 0' }}>
            <Input
              type="checkbox"
              label="(선택) 광고성 정보 수신"
              checked={!sms && !emailAd ? false : true}
              onChange={adHandler}
            />
          </div>
          <div
            style={{
              display: 'flex',
              width: 'fit-content',
              paddingLeft: '20px',
              gap: '10px',
            }}
          >
            <Input
              type="checkbox"
              label="이메일"
              block={true}
              checked={emailAd}
              onChange={emailAdHandler}
            />
            <Input
              type="checkbox"
              label="SMS"
              block={true}
              checked={sms}
              onChange={smsHandler}
            />
          </div>
        </Form.Group>
        <Typography color="primary" token="caption">
          ※ 광고성 정보 수신에 동의하시면 챌린지에 꾸준히 참여하실 수
          있도록 리마인드 알림을 보내드려요.
        </Typography>
        <Modal.Footer between>
          <Button onClick={nextHandler} disabled={name && tel && email && pr ? false : true}>다음</Button>
        </Modal.Footer>
      </>
    )
  }
}

export default FirstStep;
