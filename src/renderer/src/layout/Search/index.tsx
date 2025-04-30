import { Button, Input } from 'antd'
import { useEffect, useState } from 'react'

import IconFont from '../../components/Icon'
import { useStore } from '../../store'

import styles from './index.module.scss'

const Search = () => {
  const { searchKey, setSearchKey, setTabKey } = useStore()
  const [val, setVal] = useState<string>()

  useEffect(() => {
    setVal(searchKey)
    setTabKey('test')
  }, [searchKey])

  return (
    <Input
      size={'large'}
      allowClear
      className={styles.search}
      variant="borderless"
      placeholder={'请输入关键词搜索...'}
      value={val}
      onChange={(e) => setVal(e.target.value)}
      prefix={<IconFont type={'search-gray'} />}
      suffix={
        <Button
          type={'link'}
          size={'small'}
          onClick={() => {
            if (val === searchKey) {
              setTabKey('champion_history')
              return
            }
            setSearchKey(val)
          }}>
          搜索
        </Button>
      }
    />
  )
}

export default Search
