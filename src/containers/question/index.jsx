import React from 'react'

import QuestionButton from 'components/question-button'
import Button from 'components/button'

import * as Styles from './styles'

export default function Question({
  imageSrc,
  imageAlt,
  items,
  subtitle: Subtitle,
  title: Title,
  color,
  nextButtonText,
  prevButtonText,
  onClickPrevButton,
  onClickNextButton
}) {
  return (
    <>
      <Styles.WrapperImage>
        <img src={imageSrc} alt={imageAlt} />
      </Styles.WrapperImage>

      <Styles.Title>
        <Title />
      </Styles.Title>

      {Subtitle && (
        <Styles.Subtitle>
          <Subtitle />
        </Styles.Subtitle>
      )}

      <Styles.WrapperContent>
        <div>
          <Styles.WrapperOptions>
            {items.map((item, index) => (
              <QuestionButton
                color={color}
                key={index}
                {...item}
              />
            ))}
          </Styles.WrapperOptions>

          <Styles.WrapperButtons>
            <Button arrow onClick={onClickNextButton}>
              {nextButtonText ? nextButtonText : 'next'}
            </Button>

            <Button
              arrow
              theme="ghost"
              arrowDirection="left"
              onClick={onClickPrevButton}
            >
              {prevButtonText ? prevButtonText : 'previous'}
            </Button>
          </Styles.WrapperButtons>
        </div>
      </Styles.WrapperContent>
    </>
  )
}
