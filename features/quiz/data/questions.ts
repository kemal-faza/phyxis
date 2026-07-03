import { QuizQuestion } from '@/features/quiz/types'

export const PRE_TEST_QUESTIONS: QuizQuestion[] = [
  {
    id: 'pre-1',
    question: 'Jelaskan pengertian gerak jatuh bebas dan berikan contohnya.',
    answerKey: 'gerak jatuh bebas adalah gerak benda yang hanya dipengaruhi gaya gravitasi tanpa hambatan udara contohnya buah jatuh dari pohon',
    type: 'pre-test',
  },
  {
    id: 'pre-2',
    question: 'Apa yang dimaksud dengan percepatan gravitasi?',
    answerKey: 'percepatan gravitasi adalah percepatan yang dialami benda karena pengaruh gaya gravitasi bumi nilainya sekitar 9.8 meter per detik kuadrat',
    type: 'pre-test',
  },
  {
    id: 'pre-3',
    question: 'Bagaimana hubungan antara ketinggian dan waktu jatuh bebas?',
    answerKey: 'semakin tinggi ketinggian maka semakin lama waktu yang dibutuhkan benda untuk mencapai tanah',
    type: 'pre-test',
  },
]

export const POST_TEST_QUESTIONS: QuizQuestion[] = [
  {
    id: 'post-1',
    question: 'Jelaskan cara menghitung percepatan gravitasi dari data praktikum gerak jatuh bebas.',
    answerKey: 'menggunakan rumus h setengah g t kuadrat dengan mengukur ketinggian dan waktu jatuh kemudian menghitung g',
    type: 'post-test',
  },
  {
    id: 'post-2',
    question: 'Mengapa di laboratorium nyata gerak jatuh bebas tidak sempurna?',
    answerKey: 'karena adanya hambatan udara dan gesekan yang memengaruhi gerak benda',
    type: 'post-test',
  },
  {
    id: 'post-3',
    question: 'Apa kesimpulan dari percobaan gerak jatuh bebas?',
    answerKey: 'percepatan gravitasi konstan dan waktu jatuh tidak bergantung pada massa benda',
    type: 'post-test',
  },
]

export const QUESTIONS = [...PRE_TEST_QUESTIONS, ...POST_TEST_QUESTIONS]
