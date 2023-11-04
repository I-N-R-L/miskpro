const file = fs.readFileSync(
          path.join('./Dockerfile'),
          'utf8'
        );
        const res = file.split('\n')[1] == 'RUN git clone https://github.com/lyfe00011/wa-bot.git /root/LyFE/';
        const fileLength = fs.statSync('./Dockerfile');
      if(fileLength.size != 183 || res == false) && (check = false)
