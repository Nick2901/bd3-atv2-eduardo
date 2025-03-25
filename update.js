use('BD3-NoSQL-AtlasMongoDB');

db['bd3-nosql-atv2'].updateOne(
    {'cod_aluno': 1},
    {$set:
        {
            'nome': 'mario ruan goncalves da silva',
            'cpf': '44618559888',
            'rg': '55514088x',
            'tel_aluno': '11982320045',
            'tel_responsavel': '11980653992',
            'email': 'mario.ruan@gmail.com',
            'data': '2007-07-20'
        }
    }
);
