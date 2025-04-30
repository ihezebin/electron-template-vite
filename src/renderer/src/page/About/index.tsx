import { Button } from 'antd'

import packageJson from '../../../../../package.json'
import Logo from '../../../../../resources/icon.png'
import Korbin from '../../assets/images/hezebin.jpg'

import styles from './index.module.scss'

const About = () => {
  const handleOpenExternalUrl = (url: string) => {
    window.shell.openExternal(url)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        {/*关于 electron-template-vite*/}
        <div className={styles.aboutWrapper}>
          <img src={Logo} alt="" className={styles.logo} />
          <div className={styles.name}>electron-template-vite</div>
          <div className={styles.version}>当前版本：{packageJson.version}</div>
          <p>
            <b>HLOLT</b> 全称 <b>Hezebin League of Legends Tools</b>， 即 <b>河泽冰英雄联盟工具</b>{' '}
            。 这是一个基于 Electron + Electron-vite + React 开发的英雄联盟工具程序，同时支持
            Windows 和 MacOS
            平台，旨在不破坏游戏公平性的原则下，增强和优化英雄联盟客户端的功能，提升召唤师们的游戏体验。包含如下功能：
          </p>
          <div className={styles.funcList}>
            <div>
              1.同大区战绩查询功能（不支持云顶），相较于官方客户端有更多的战绩数据类型，尤其较于中国的服务器来说支持查看隐藏生涯召唤师的战绩
            </div>
            <div>
              2.战局分析功能，在进入 BP
              阶段后自动查询队友战绩，加载游戏后自动查询对手战绩，知己知彼百战不殆
            </div>
            <div>
              3.训练模式，相较于官方客户端仅可创建 1 个人机，增强为创建 9 个人机做 5v5 的训练模式
            </div>
            <div>
              4.生涯和状态设置功能，包含生涯背景图片为英雄皮肤，支持选择所有英雄的所有皮肤；临时修改状态栏图标、状态、签名、段位。
            </div>
            <div>
              5.游戏设置，自动接收对局、指定了英雄可自动
              Ban&Pick、观战同大区任何游戏中召唤师等多种实用功能
            </div>
          </div>
          <p style={{ width: '100%' }}>
            本程序目前正在持续迭代更新中，更多用于学习用途，若有宝贵的改进意见或想法，请前往
            <Button type={'link'} onClick={() => handleOpenExternalUrl(packageJson.homepage)}>
              {packageJson.homepage}
            </Button>
            联系开发者！
          </p>
        </div>
        {/* 免责声明 */}
        <div className={styles.aboutWrapper}>
          <div className={styles.name}>免责声明</div>
          <p>
            1.本程序基于英雄联盟官方API实现，不读取或修改客户端的的任何本体文件、代码和内存数据。理论上使用本程序不会导致封号。
          </p>
          <p>
            2.本程序的代码实现遵守 Riot 官方的 API 政策规定：
            <Button
              type={'link'}
              onClick={() =>
                handleOpenExternalUrl('https://developer.riotgames.com/policies/general')
              }>
              https://developer.riotgames.com/policies/general
            </Button>
          </p>
          <p>
            3.提供的功能符合 《英雄联盟》游戏插件公约的要求：
            <Button
              type={'link'}
              onClick={() =>
                handleOpenExternalUrl(
                  'https://lol.qq.com/webplat/info/news_version3/152/4579/4581/m3106/201509/381618.shtml'
                )
              }>
              https://lol.qq.com/webplat/info/news_version3/152/4579/4581/m3106/201509/381618.shtml
            </Button>
          </p>
          <p>
            4.使用本程序所产生的一切后果将由您自行承担，因使用本程序而产生的任何直接或间接损失自行负责，用户在决定使用本程序时，应充分考虑并自行承担由此产生的所有风险和后果。
          </p>
          <p>
            5.作者保留对本程序的最终解释权，保留随时修改本免责声明的权利，请定期查阅此页面以获取最新信息。
          </p>
          <p>
            6.请确保您已经详细阅读、理解并同意免责声明中的条款；同时，请遵守相关游戏规则，共同维护健康和公平的游戏环境。
          </p>
        </div>
        {/* 关于作者 */}
        <div className={styles.aboutWrapper}>
          <img src={Korbin} alt="" className={styles.hezebinLogo} />
          <div className={styles.hezebinName}>作者 Korbin</div>
          <Button type={'link'} onClick={() => handleOpenExternalUrl(packageJson.author)}>
            关于河泽冰
          </Button>
        </div>
        <br />
        <br />
      </div>
    </div>
  )
}

export default About
