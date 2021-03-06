import * as React from 'react';
import CardGalleryItem from '..';
import { cardGalleryItemTestkitFactory } from '../../../testkit';
import { cardGalleryItemTestkitFactory as cardGalleryItemEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { cardGalleryItemTestkitFactory as cardGalleryItemPuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function CardGalleryItemWithMandatoryProps() {
  return <CardGalleryItem primaryActionProps={{}} />;
}

function CardGalleryItemWithAllProps() {
  return (
    <CardGalleryItem
      badge={<div />}
      title="title"
      subtitle="subtitle"
      backgroundImageUrl="url"
      backgroundImageNode={<div />}
      primaryActionProps={{
        label: "primary label",
        onClick: _ev => {},
        disabled: true,
        disabledMessage: "disabled",
      }}
      secondaryActionProps={{
        label: "secondary label",
        onClick: _ev => {},
      }}
      settingsMenu={<div />}
      dataHook="hook"
    />
  );
}

async function testkits() {
  const testkit = cardGalleryItemTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div')
  });

  const enzymeTestkit = cardGalleryItemEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />)
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await cardGalleryItemPuppeteerTestkitFactory({
    dataHook: 'hook',
    page
  });
}
