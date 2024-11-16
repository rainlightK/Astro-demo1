import {
  GradientText,
  HeroAvatar,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          不喜欢奶龙的小朋友们你们好，我是 <GradientText>奶龙</GradientText> 👋
        </>
      }
      description={
        <>
          奶龙全集地址:{''}
          <a
            className="text-cyan-400 hover:underline"
            href="https://www.bilibili.com/bangumi/play/ep453031?spm_id_from=333.337.0.0&from_spmid=666.25.episode.0"
          >
            奶龙
          </a>{' '}
        </>
      }
      avatar={
        <img
          className="h-80 w-80"
          src="/assets/images/anon.gif"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          {/* <a href="/">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a> */}
        </>
      }
    />
  </Section>
);

export { Hero };
