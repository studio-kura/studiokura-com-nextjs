import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Heading, Image, Box } from '@chakra-ui/react'
import { Layout } from '@/components/Layout'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Navigation } from '@/components/Navigation'
import type { TeacherData } from '@/pages/api/get-teacher-info'

const dummyTeacher: TeacherData = {
  slug: '読み込み中・・・'
}
const cdnDomain = process.env.NEXT_PUBLIC_CDN_DOMAIN ?? ''
const cdnDirectory = process.env.NEXT_PUBLIC_CDN_DIRECTORY ?? ''

const TeacherProfilePage = () => {
  const router = useRouter()
  const [teacherData, setTeacherData] = useState<TeacherData>(dummyTeacher)
  const [teacherId, setTeacherId] = useState<string>()
  const fetchTeacher = async (teacherid: string) => {
    const teacherReq = await fetch(
      `/api/get-teacher-info?teacherid=${teacherid}`
    )
    setTeacherData(await teacherReq.json())
  }
  useEffect(() => {
    if (router.query.teacherid == undefined) return
    const teacherid = router.query.teacherid as string
    setTeacherId(teacherid)
    if (teacherData.slug == dummyTeacher.slug) {
      fetchTeacher(teacherid)
    }
  }, [router])

  return (
    <Layout title={`${teacherId}｜Studio Kura 絵画美術教室（福岡県）`}>
      <Navigation />
      <Container height={'200px'} minW={'100%'}>
        <Heading mt={'1em'} size={['2xl', '2xl', '2xl']}>
          講師紹介: {teacherData.name}
        </Heading>
      </Container>
      <Container>
        <Box dangerouslySetInnerHTML={{ __html: teacherData.content ?? '' }} />
        <Box mt={8}>
          {teacherData.images?.map((imageSrc: string) => (
            <Image
              src={`https://${cdnDomain}/${cdnDirectory}${imageSrc}`}
              alt={`${teacherData.name}の写真`}
              mb={4}
            />
          ))}
        </Box>
        <Footer />
      </Container>
    </Layout>
  )
}

export default TeacherProfilePage
