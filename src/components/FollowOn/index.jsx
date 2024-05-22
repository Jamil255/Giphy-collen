import { FaGithub } from 'react-icons/fa'
import { FaInstagram, FaXTwitter } from 'react-icons/fa6'
import { TiSocialAtCircular } from 'react-icons/ti'

const FollowOn = () => {
  return (
    <div
      className="faded-text pt-2" //custom - faded-text
    >
      <span>Follow on:</span>
      <div className="flex gap-4 pt-3">
        <a href="https://github.com/Jamil255">
          <FaGithub size={20} />
        </a>
        <a href="https://www.instagram.com/jamilafzal8/">
          <FaInstagram size={20} />
        </a>
        <a href="https://jamilafzaldev.netlify.app/">
          <TiSocialAtCircular size={20} />
        </a>
      </div>
    </div>
  )
}

export default FollowOn
