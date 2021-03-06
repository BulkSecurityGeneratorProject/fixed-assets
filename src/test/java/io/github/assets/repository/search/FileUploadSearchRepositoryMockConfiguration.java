package io.github.assets.repository.search;

import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Configuration;

/**
 * Configure a Mock version of {@link FileUploadSearchRepository} to test the
 * application without starting Elasticsearch.
 */
@Configuration
public class FileUploadSearchRepositoryMockConfiguration {

    @MockBean
    private FileUploadSearchRepository mockFileUploadSearchRepository;

}
